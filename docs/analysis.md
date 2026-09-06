# Derived Analysis

Everything on this page is computed from `data/coverage.csv` and `data/factors.csv`
by `scripts/analyse_coverage.py`. No values are introduced here that are not
already recorded in a factor entry. Regenerate with:

```bash
python scripts/analyse_coverage.py
```

Figure: `figures/coverage-by-axis.png`. State as of the 2026-09-02 source audit.

---

## Headline numbers

| Metric | Value |
|---|---|
| Cells in grid | 40 (8 factors x 5 tumor types) |
| Cells with no data | 31 (78%) |
| Cells with Indian data | 5 (12%) |
| **Coverage index** | **16%** |

**Coverage index** is the metric worth explaining. Score each cell 0 for no data,
1 for inferred, 2 for transcript proxy, 3 for direct measurement, then express the
total as a share of the maximum possible. It answers a sharper question than
"how many cells are filled": it asks how much of the *achievable evidence* actually
exists. At 16%, the pilot grid holds roughly one sixth of the evidence it would
hold if every factor had been directly measured in every tumor type.

---

## Finding A — two factors are entirely uncharacterised

| Factor | Coverage index | Empty cells | Indian cells |
|---|---|---|---|
| Tissue stiffness | 40% | 3 / 5 | 0 |
| Hypoxia / HIF-1a | 27% | 3 / 5 | 2 |
| Collagen I | 27% | 3 / 5 | 1 |
| Oestrogen / receptor | 20% | 4 / 5 | 1 |
| Lactate | 7% | 4 / 5 | 1 |
| Interstitial fluid pressure | 7% | 4 / 5 | 0 |
| **TGF-beta** | **0%** | **5 / 5** | 0 |
| **Extracellular pH** | **0%** | **5 / 5** | 0 |

After the audit, **extracellular pH and TGF-beta have no sourced evidence in any
tumor type in this grid**. Both are well-established phenomena with large
literatures — the gap is not that the biology is unknown, it is that no
per-tumor-type value has been read and recorded here yet. Both entries carry
full mechanism and method sections with empty value fields, which is the schema
working as intended.

## Finding B — the cervical column is empty, and that column is the cheapest to fill

| Tumor type | Coverage index | Empty cells | Indian cells |
|---|---|---|---|
| Breast | 38% | 5 / 8 | 1 |
| Oral / HNSCC | 17% | 6 / 8 | 2 |
| Pancreatic | 17% | 6 / 8 | 0 |
| Gallbladder | 8% | 6 / 8 | 2 |
| **Cervical** | **0%** | **8 / 8** | **0** |

Cervical cancer is the **second most common cancer among women in India**, with
127,526 new cases and 79,906 deaths estimated for 2022, an age-standardised
incidence rate of 17.7 per 100,000 — and India carries over 65% of the Southeast
Asia regional burden (Singh, Grover & Dhanasekaran 2025, *Global Epidemiology*
10:100233, PMID 41399754). It is the single worst-covered column in this atlas.

Two Indian cervical datasets are already inventoried — stage-wise expression
profiling with documented purity screening (PMC3892388) and whole-exome
sequencing from ACTREC/Tata Memorial (PMC5102491). **Transcript-level cells in
this column are therefore fillable from existing data, without new experiments.**
That makes it the highest-return target in the grid.

## Finding C — after the audit, no transcript-level evidence survives

| Evidence type | Cells |
|---|---|
| Direct measurement | 5 |
| Inferred | 4 |
| Transcript proxy | 0 |
| No data | 31 |

All three cells previously coded `transcript` were downgraded in the audit
because no dataset was cited for them. The remaining evidence is either a direct
measurement or an inference from a related measurement — nothing sits in the
middle tier. This is worth stating plainly, because transcript-level evidence is
the tier that is cheapest to add from public data (TCGA, ICGA, the Indian
cervical and breast datasets above). **The grid's most fillable tier is currently
its emptiest.**

## Finding D — a claimed asymmetry needs qualifying

`docs/presentation-notes.md` states that "if the Indian component matters, the
chemical factors are the tractable entry point, not ECM structure." The grid
supports that by raw count but not by rate:

| Category | Cells | Coverage index | Empty | Indian cells | Indian rate |
|---|---|---|---|---|---|
| Chemical / soluble | 30 | 10% | 25 | 4 | 13% |
| Structural | 10 | 33% | 6 | 1 | 10% |

Two things follow, and both should be said aloud rather than left for someone
else to notice:

1. **Indian evidence is 4:1 chemical by count, but 13% vs 10% by rate.** The
   grid contains three times as many chemical factors as structural ones, so the
   raw count partly reflects how the grid was built rather than what the
   literature contains. The asymmetry is real but weaker than a count suggests.
2. **Globally, the structural factors in this grid are better covered, not
   worse** — a 33% coverage index against 10%. The "ECM is understudied" claim
   holds specifically for *Indian* cohorts. It does not hold for the grid as a
   whole, and stating it unqualified invites a correction.

This qualification does not overturn the project framing. It sharpens it: the
Indian ECM gap is the finding, not a general ECM gap.

---

## Concentration of the Indian evidence base

The five Indian cells trace to a small number of groups:

| Factor | Tumor type | Evidence | Origin |
|---|---|---|---|
| Hypoxia / HIF-1a | Oral / HNSCC | Direct | Indian oral pathology departments (IHC) |
| Hypoxia / HIF-1a | Gallbladder | Inferred | ICMR-NIP Delhi (iTRAQ proteomics) |
| Collagen I | Gallbladder | Inferred | ICMR-NIP Delhi (iTRAQ proteomics) |
| Lactate | Oral / HNSCC | Inferred | Indian oral pathology (GLUT1/HIF-1a proxy) |
| Oestrogen / receptor | Breast | Direct | ICGA, Indian BC transcriptomics |

**Four of five trace to two research communities.** A paper count overstates the
independence of the Indian evidence base — it is narrow, not merely small.

---

## What this implies for sequencing the work

Ranked by evidence gained per unit of effort:

1. **Fill the cervical column from existing Indian datasets.** 8 empty cells,
   two inventoried datasets, no new experiments. Highest return in the grid.
2. **Extract matrisome values from the gallbladder proteomics supplementary
   tables** (PMID 36686780). Converts the one Indian ECM source from `inferred`
   to `direct`, and is the only Indian ECM composition data in existence.
3. **Source pH and TGF-beta values.** Two entirely empty rows, both with
   large primary literatures. Pure reading work, no access barriers expected.
4. **Measure stiffness on Indian tissue.** No such measurement exists anywhere.
   Requires AFM or rheometry access, but produces genuinely novel data rather
   than filling in a literature gap.

Items 1-3 are literature work. Item 4 is the experiment this atlas exists to
identify.
