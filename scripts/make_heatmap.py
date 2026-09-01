#!/usr/bin/env python3
"""
Render the TME evidence coverage heatmap from data/coverage.csv.

Cells are coloured by strength of available evidence. A hatched overlay and a
bold cell border mark factor/tumor-type combinations where Indian cohort data
exists.

Usage:
    python scripts/make_heatmap.py
    python scripts/make_heatmap.py --out figures/coverage.png --dpi 300

Requires: pandas, matplotlib, numpy
    pip install pandas matplotlib numpy
"""

import argparse
from pathlib import Path

import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import numpy as np
import pandas as pd

# Evidence strength ordering. Higher = stronger evidence.
EVIDENCE_LEVELS = {
    "none": 0,
    "inferred": 1,
    "transcript": 2,
    "direct": 3,
}

EVIDENCE_LABELS = {
    0: "No data",
    1: "Inferred",
    2: "Transcript proxy",
    3: "Direct measurement",
}

# Sequential palette, light to dark.
COLORS = ["#f5f5f5", "#fde5c8", "#f4a582", "#b2182b"]


def load(path):
    df = pd.read_csv(path)
    required = {"factor", "tumor_type", "evidence", "india"}
    missing = required - set(df.columns)
    if missing:
        raise ValueError(f"coverage.csv missing columns: {missing}")

    bad = set(df["evidence"]) - set(EVIDENCE_LEVELS)
    if bad:
        raise ValueError(
            f"Unrecognised evidence values: {bad}. "
            f"Allowed: {sorted(EVIDENCE_LEVELS)}"
        )

    df["score"] = df["evidence"].map(EVIDENCE_LEVELS)
    df["has_india"] = df["india"].astype(str).str.lower().isin({"yes", "y", "true", "1"})
    return df


def build_matrices(df):
    """Pivot into (score matrix, india mask, row labels, col labels)."""
    factors = list(dict.fromkeys(df["factor"]))
    tumors = list(dict.fromkeys(df["tumor_type"]))

    scores = df.pivot(index="factor", columns="tumor_type", values="score")
    india = df.pivot(index="factor", columns="tumor_type", values="has_india")

    scores = scores.reindex(index=factors, columns=tumors)
    india = india.reindex(index=factors, columns=tumors).fillna(False)

    return scores.values.astype(float), india.values.astype(bool), factors, tumors


def plot(scores, india, factors, tumors, out_path, dpi):
    cmap = plt.matplotlib.colors.ListedColormap(COLORS)
    norm = plt.matplotlib.colors.BoundaryNorm([-0.5, 0.5, 1.5, 2.5, 3.5], cmap.N)

    n_rows, n_cols = scores.shape
    fig_w = max(7.0, 1.5 * n_cols + 3.5)
    fig_h = max(4.5, 0.62 * n_rows + 2.6)

    fig, ax = plt.subplots(figsize=(fig_w, fig_h))
    ax.imshow(scores, cmap=cmap, norm=norm, aspect="auto")

    # Grid lines between cells.
    ax.set_xticks(np.arange(-0.5, n_cols, 1), minor=True)
    ax.set_yticks(np.arange(-0.5, n_rows, 1), minor=True)
    ax.grid(which="minor", color="white", linewidth=2.5)
    ax.tick_params(which="minor", length=0)

    # Mark cells with Indian data: hatching plus a bold border.
    for i in range(n_rows):
        for j in range(n_cols):
            if india[i, j]:
                ax.add_patch(
                    mpatches.Rectangle(
                        (j - 0.5, i - 0.5), 1, 1,
                        fill=False, hatch="///",
                        edgecolor="#1a1a1a", linewidth=2.0, zorder=3,
                    )
                )

    ax.set_xticks(range(n_cols))
    ax.set_xticklabels(tumors, rotation=30, ha="right", fontsize=10)
    ax.set_yticks(range(n_rows))
    ax.set_yticklabels(factors, fontsize=10)

    ax.set_title(
        "Tumor microenvironment factor coverage\n"
        "hatched = Indian cohort data available",
        fontsize=13, pad=16,
    )

    handles = [
        mpatches.Patch(facecolor=COLORS[k], edgecolor="#cccccc", label=EVIDENCE_LABELS[k])
        for k in sorted(EVIDENCE_LABELS)
    ]
    handles.append(
        mpatches.Patch(facecolor="white", edgecolor="#1a1a1a",
                       hatch="///", label="Indian data")
    )
    ax.legend(
        handles=handles, bbox_to_anchor=(1.02, 1),
        loc="upper left", frameon=False, fontsize=9,
    )

    for spine in ax.spines.values():
        spine.set_visible(False)

    fig.tight_layout()
    out_path.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(out_path, dpi=dpi, bbox_inches="tight")
    print(f"Wrote {out_path}")

    # Summary counts, useful when presenting.
    total = scores.size
    empty = int((scores == 0).sum())
    india_n = int(india.sum())
    print(f"\n{n_rows} factors x {n_cols} tumor types = {total} cells")
    print(f"  No data:          {empty} ({100 * empty / total:.0f}%)")
    print(f"  Indian data:      {india_n} ({100 * india_n / total:.0f}%)")


def main():
    root = Path(__file__).resolve().parent.parent
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--csv", type=Path, default=root / "data" / "coverage.csv")
    p.add_argument("--out", type=Path, default=root / "figures" / "coverage-heatmap.png")
    p.add_argument("--dpi", type=int, default=200)
    args = p.parse_args()

    df = load(args.csv)
    scores, india, factors, tumors = build_matrices(df)
    plot(scores, india, factors, tumors, args.out, args.dpi)


if __name__ == "__main__":
    main()
