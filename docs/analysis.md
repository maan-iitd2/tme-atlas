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

## Modelling readiness

**The downstream user is confirmed: the lab's modelling work.** That changes the
question the atlas has to answer. "Is there evidence for this cell" is necessary
but not sufficient — a model needs *a number, with units, that can be set*. A
transcript-level result cannot parameterise a hydrogel.

`data/factors.csv` records that judgement explicitly in `model_param_status`,
rather than inferring it from the value strings. Recomputed by
`scripts/analyse_coverage.py`.

| Status | Count | Meaning |
|---|---|---|
| `ready` | 4 | Numeric range with units, normal and tumor, from a read source |
| `unsourced` | 2 | A range exists but no source has been read for it |
| `qualitative` | 1 | Described only as low/elevated — no numbers |
| `categorical` | 1 | Not a continuous settable quantity |

### The four that can parameterise a model today

| Factor | Normal → tumor | Units | Confidence in the values |
|---|---|---|---|
| Extracellular pH | 7.4 → 6.5–7.0 | pH units | Medium |
| Hypoxia | 40–60 → <10 | mmHg pO₂ | Low–medium |
| Interstitial fluid pressure | ~0 → 10–40 | mmHg | Low–medium |
| Tissue stiffness | 1.0–1.4 → 3.3–5.5 | kPa | Low–medium |

**Note what the confidence column says: not one parameter-ready factor exceeds
medium confidence on its values.** That is the single most important caveat this
atlas can give a modeller, and it is exactly what the schema's split of
confidence into phenomenon versus values was built to surface. The phenomena are
beyond dispute; the numbers are method-dependent and variable.

The remaining four are not usable as parameters yet. Lactate and collagen I have
ranges but no read source behind them; TGF-β is recorded only qualitatively;
hormone receptor status is categorical and does not enter a continuous model as a
value at all.

### The coupling gap — vascular density is missing

Four entries independently specify the same coupling term in their `Modelling
notes`, and it is not a factor in this atlas:

| Entry | What its modelling note says to couple to |
|---|---|
| Hypoxia / HIF-1α | "Couple to vascular density rather than imposing directly" |
| Extracellular pH | "Coupled to a perfusion or diffusion term rather than set as a bulk constant" |
| Lactate | "Couple to glycolytic rate and perfusion rather than imposing a bulk value" |
| Interstitial fluid pressure | "Couple to vascular permeability and lymphatic clearance terms" |

**Vascular density has no entry in the atlas** (`grep` returns zero rows in
`data/factors.csv`), yet it is the shared variable four factors need in order to
be modelled spatially rather than as bulk constants. Hypoxia, pH and lactate all
share the same physical length scale — the 100–200 µm oxygen diffusion limit from
a vessel — so they are not four independent parameters but one perfusion field
with three readouts.

This is a structural gap that only becomes visible once modelling is the target.
It reorders the expansion list.

### Revised factor priority, for a modelling target

Previously ordered by evidence gained. Reordered by parameter value to a model:

1. **Vascular density** — the coupling term four existing entries already require.
   Without it, hypoxia, pH, lactate and IFP can only be set as bulk constants,
   which every one of those entries explicitly warns against. Highest priority by
   a clear margin.
2. **Glucose depletion** — directly settable in culture medium, in mM. Parameter-
   ready by construction, and completes the metabolic triad with lactate and pH.
3. **Fibronectin** — settable as a coating or composite-matrix concentration.
   Byrne's central result is that single-protein matrices are inadequate, so
   composite composition is the parameter that matters.
4. **MMP2 / MMP9 and LOX** — these are rates, not states. They parameterise the
   *dynamics* of matrix remodelling and stiffening rather than a starting
   condition. Needed for a time-evolving model, not a static scaffold.
5. **CAF subtypes** — a co-culture design variable rather than a scalar parameter.

### What Izzi 2019 does and does not give a modeller

Izzi et al. (2019) is transcript-level: 820 matrisome genes, RNA-seq, across
10,487 TCGA patients. For a modelling downstream user this is close to
orthogonal to what is needed — a scaffold cannot be set to a normalised
expression value, and the authors could cross-validate at protein level for only
22 of 32 tumor types.

Its genuine use here is narrower and worth stating precisely: it is a legitimate
source for the **transcript tier** of the coverage grid, which is currently the
emptiest tier, and its regulatory-module and master-regulator results describe
*what drives* matrisome composition rather than *what that composition is*. It
answers a different question at a different level. See `literature/papers.md`.

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
