#!/usr/bin/env python3
"""
Derive coverage statistics from data/coverage.csv and data/factors.csv.

Everything here is computed from the audited grid. No values are introduced.
Writes a summary figure and prints the numbers used in docs/analysis.md.

Usage:
    python scripts/analyse_coverage.py
    python scripts/analyse_coverage.py --out figures/coverage-by-axis.png

Requires: pandas, matplotlib
"""

import argparse
from pathlib import Path

import matplotlib.pyplot as plt
import pandas as pd

SCORE = {"none": 0, "inferred": 1, "transcript": 2, "direct": 3}
ORDER = ["none", "inferred", "transcript", "direct"]
LABEL = {"none": "No data", "inferred": "Inferred",
         "transcript": "Transcript proxy", "direct": "Direct measurement"}
COLORS = {"none": "#f1edea", "inferred": "#fde5c8",
          "transcript": "#f4a582", "direct": "#b2182b"}

# Display names for figures. The CSV keeps ASCII names as the join key.
DISPLAY = {
    "Hypoxia / HIF-1a": "Hypoxia / HIF-1α",
    "TGF-beta": "TGF-β",
}



def load(root):
    cov = pd.read_csv(root / "data" / "coverage.csv")
    fac = pd.read_csv(root / "data" / "factors.csv")
    cov["score"] = cov["evidence"].map(SCORE)
    cov["has_india"] = cov["india"].astype(str).str.lower().eq("yes")
    cov = cov.merge(fac[["factor_id", "category"]], on="factor_id", how="left")
    if cov["category"].isna().any():
        missing = cov.loc[cov["category"].isna(), "factor_id"].unique()
        raise ValueError(f"factor_id present in coverage.csv but not factors.csv: {missing}")
    return cov


def index_pct(group):
    """Coverage index: achieved evidence score as a share of the maximum possible."""
    return 100 * group["score"].sum() / (3 * len(group))


def summarise(cov):
    out = {}
    n = len(cov)
    out["cells"] = n
    out["empty"] = int((cov["score"] == 0).sum())
    out["india"] = int(cov["has_india"].sum())
    out["index"] = index_pct(cov)

    out["by_factor"] = (
        cov.groupby("factor", sort=False)
           .apply(lambda g: pd.Series({
               "index": index_pct(g),
               "empty": int((g["score"] == 0).sum()),
               "india": int(g["has_india"].sum()),
           }), include_groups=False)
           .sort_values("index", ascending=False)
    )
    out["by_tumor"] = (
        cov.groupby("tumor_type", sort=False)
           .apply(lambda g: pd.Series({
               "index": index_pct(g),
               "empty": int((g["score"] == 0).sum()),
               "india": int(g["has_india"].sum()),
           }), include_groups=False)
           .sort_values("index", ascending=False)
    )
    out["by_category"] = (
        cov.groupby("category")
           .apply(lambda g: pd.Series({
               "cells": len(g),
               "index": index_pct(g),
               "empty": int((g["score"] == 0).sum()),
               "india": int(g["has_india"].sum()),
           }), include_groups=False)
    )
    return out


def plot(cov, out_path, dpi):
    """Stacked bars: how each factor and each tumor type is covered."""
    def stack(ax, col, title):  # noqa: C901
        keys = list(dict.fromkeys(cov[col]))
        counts = (cov.groupby([col, "evidence"]).size()
                     .unstack(fill_value=0).reindex(index=keys, columns=ORDER, fill_value=0))
        # strongest evidence first makes the empty share read as the tail
        left = [0] * len(counts)
        for ev in reversed(ORDER):
            vals = counts[ev].to_list()
            ax.barh(range(len(counts)), vals, left=left, height=.68,
                    color=COLORS[ev], edgecolor="white", linewidth=1.2,
                    label=LABEL[ev] if title.startswith("Factor") else None)
            left = [a + b for a, b in zip(left, vals)]
        ax.set_yticks(range(len(counts)))
        ax.set_yticklabels([DISPLAY.get(i, i) for i in counts.index], fontsize=9.5)
        ax.invert_yaxis()
        ax.set_xlabel("cells", fontsize=9)
        ax.set_title(title, fontsize=11, loc="left", pad=10)
        ax.set_xlim(0, max(left) * 1.04)
        ax.tick_params(length=0)
        for s in ax.spines.values():
            s.set_visible(False)
        ax.grid(axis="x", color="#e8e2de", linewidth=.9)
        ax.set_axisbelow(True)

    fig, (a1, a2) = plt.subplots(
        2, 1, figsize=(8.4, 7.6),
        gridspec_kw={"height_ratios": [8, 5], "hspace": .46})
    stack(a1, "factor", "Factor — evidence available across 5 tumor types")
    stack(a2, "tumor_type", "Tumor type — evidence available across 8 factors")

    # legend below both panels, so it cannot collide with either panel title
    handles, labels = a1.get_legend_handles_labels()
    fig.legend(handles, labels, loc="lower center", bbox_to_anchor=(.5, -.035),
               frameon=False, fontsize=11.5, ncol=4, columnspacing=1.8, handlelength=1.5)
    fig.suptitle("Where the coverage actually sits",
                 fontsize=13.5, x=.125, ha="left", y=.97)

    out_path.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(out_path, dpi=dpi, bbox_inches="tight",
                facecolor="white")
    print(f"Wrote {out_path}")


def main():
    root = Path(__file__).resolve().parent.parent
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--out", type=Path, default=root / "figures" / "coverage-by-axis.png")
    p.add_argument("--dpi", type=int, default=200)
    args = p.parse_args()

    cov = load(root)
    s = summarise(cov)

    print(f"\n{s['cells']} cells | {s['empty']} empty "
          f"({100*s['empty']/s['cells']:.0f}%) | {s['india']} with Indian data "
          f"({100*s['india']/s['cells']:.0f}%)")
    print(f"Coverage index (achieved evidence / maximum possible): {s['index']:.0f}%\n")

    print("By factor:");   print(s["by_factor"].round(1).to_string())
    print("\nBy tumor type:"); print(s["by_tumor"].round(1).to_string())
    print("\nBy category:");   print(s["by_category"].round(1).to_string())

    plot(cov, args.out, args.dpi)


if __name__ == "__main__":
    main()
