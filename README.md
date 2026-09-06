# TME Atlas

A structured reference of tumor microenvironment (TME) factors across cancer types, with explicit tracking of which factors have been characterised in Indian patient cohorts.

**Status:** Pilot complete. Schema defined, 8 factor entries written, literature and dataset inventories compiled, coverage heatmap rendering from data.

**Context:** Project for Prof. Amit Das, Biotechnology / Biochemical Engineering, IIT Delhi.

---

## What this is

The tumor microenvironment is everything in a tumor that is not a malignant cell: the extracellular matrix (ECM) scaffold, the chemical composition of the interstitial fluid, the non-cancer cell types living in the tissue, and the signalling molecules moving between them.

These factors are documented across thousands of papers in inconsistent units, from inconsistent measurement methods, with inconsistent coverage across cancer types. This repository collects them into one schema so that each factor can be compared across tumor types and assessed for evidence quality.

## What this is not

- Not a modelling or simulation codebase.
- Not a source of new experimental data.
- Not a comprehensive review of TME biology. Entries are scoped to what is *measurable and comparable*.

---

## Two factor categories

**Structural** — the physical scaffold and its mechanical properties.
Collagens, glycoproteins (fibronectin, laminins, tenascin-C, periostin), proteoglycans, remodelling enzymes (MMPs, LOX, TIMPs), bulk stiffness, fibre alignment, pore size, crosslink density.

**Chemical / soluble** — the composition of the fluid filling the scaffold.
Extracellular pH, oxygen tension and hypoxia signalling, metabolites (lactate, glucose, glutamine), growth factors and cytokines (TGF-β, VEGF, IL-6), hormones (oestrogen, progesterone, androgens, IGF-1), interstitial fluid pressure.

The two are not independent. The ECM physically sequesters many growth factors and releases them on degradation; acidity activates matrix-degrading enzymes. Cross-links between entries are recorded in each factor's `Connections` field.

---

## Repository structure

```
tme-atlas/
├── README.md                  this file
├── SCHEMA.md                  field definitions for every factor entry
├── factors/
│   ├── chemical/              pH, hypoxia, lactate, ...
│   └── structural/            collagens, stiffness, ...
├── datasets/
│   ├── india-inventory.md     Indian cohorts and what they contain
│   └── global-resources.md    TCGA, CPTAC, MatrisomeDB, ...
├── literature/
│   └── papers.md              annotated bibliography
├── data/
│   ├── factors.csv            machine-readable factor index
│   └── coverage.csv           evidence grid, source of truth for the figure
├── scripts/
│   ├── make_heatmap.py        renders the coverage figure from coverage.csv
│   └── analyse_coverage.py    derives coverage statistics and the second figure
├── figures/
│   ├── coverage-heatmap.png   generated
│   └── coverage-by-axis.png   generated
└── docs/
    ├── coverage-gap.md        what is documented where, and what is missing
    ├── analysis.md            derived statistics and what they imply
    ├── gated-sources.md       papers behind access barriers, to retrieve manually
    └── presentation-notes.md  meeting talking points
```

See `SETUP.md` for install, figure regeneration, and git setup.

---

## Scope control

Deliberately limited. Target for the first phase:

- **15 factors**, written to full schema depth
- **8 tumor types**, prioritising those with high Indian incidence (oral/head and neck, gallbladder, cervical, breast)
- Every entry carries an explicit confidence flag and an Indian-data field, including when that field reads "none found"

Breadth is easy and low value. A shallow entry for 1,000 matrisome genes is a gene list, which already exists (MatrisomeDB). The contribution here is depth plus honest coverage accounting.

---

## Three findings from the scoping phase

**1. The starting reference papers do not contain composition data.**
They are mechanism reviews plus one bench study. Useful for concepts and taxonomy; not a source of per-tumor-type numbers. Those must come from TCGA, CPTAC, MatrisomeDB, and primary measurement papers. See `literature/papers.md`.

**2. Indian TME data is asymmetric.**
Indian ECM/matrisome characterisation is close to absent — essentially one gallbladder proteomics study. Indian hypoxia data is comparatively good, with several HIF-1α immunohistochemistry studies in oral squamous cell carcinoma. This asymmetry is itself a documented result and shapes which factors are tractable for an India-focused analysis. See `datasets/india-inventory.md` and `docs/coverage-gap.md`.

**3. Coverage can be audited, and auditing changes the answer.**
The schema forces three fields that most reviews omit: measurement method, confidence split into phenomenon versus values, and Indian data including explicit absence. Applying that rule to the pilot grid moved seven cells — six were coded as having evidence with no read source recorded, and were reset to `none`. Empty cells went from 62% to 78%. The audit trail is in `docs/coverage-gap.md`.

---

## Planned output

A coverage heatmap: tumor types × TME factors, each cell coded by evidence type (direct measurement / transcript proxy / inferred / none), with Indian-data availability marked separately. No such map currently exists in the literature.

**Pilot result (8 factors × 5 tumor types, 40 cells), after source audit:** 78% of cells have no data; 12% have Indian data; cervical cancer is uncharacterised for every factor despite being the second most common cancer among Indian women (127,526 new cases in 2022, PMID 41399754). Pre-audit figures were 62% and 10% — see the verification log in `docs/coverage-gap.md`.

**Coverage index: 16%.** Scoring each cell by evidence strength (0 none, 1 inferred, 2 transcript, 3 direct) and expressing the total as a share of the maximum, the pilot grid holds roughly one sixth of the evidence it would hold if every factor were directly measured in every tumor type. Derivation and per-axis breakdown in `docs/analysis.md`.

## Current entries

| Factor | Category | Indian data |
|---|---|---|
| Extracellular pH | Chemical | None found |
| Hypoxia / HIF-1α | Chemical | **Present** — OSCC IHC, GBC proteomics |
| Lactate | Chemical | Proxy only — GLUT1/HIF-1α in Indian OSCC |
| TGF-β | Chemical | Extractable from existing datasets |
| Oestrogen / hormone receptor | Chemical | **Present** — ICGA, clinical annotation |
| Interstitial fluid pressure | Chemical | None found |
| Collagen I | Structural | Adjacent only — GBC proteomics |
| Tissue stiffness | Structural | None found |
