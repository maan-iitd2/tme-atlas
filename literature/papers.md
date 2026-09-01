# Annotated Bibliography

Every entry records what the paper actually contains and whether it is a usable data source. Compiled September 2026.

**Tags:** `[review]` conceptual, no primary data · `[primary]` original measurement · `[dataset]` browsable/downloadable resource · `[india]` Indian cohort

---

## Original reference set (provided at project start)

### 1. Dzobo K, Dandara C (2023) `[review]`
*The Extracellular Matrix: Its Composition, Function, Remodeling, and Role in Tumorigenesis.*
Biomimetics 8(2):146. PMC10123695

Broad foundational review. Covers ECM composition (collagens, laminins, fibronectin, proteoglycans), how architecture and stiffness shape cell phenotype, protease-driven remodelling in homeostasis, dysregulation in fibrosis and cancer, and ECM-targeted therapy in the context of drug resistance.

**Contains data?** No. Conceptual grounding and taxonomy only.
**Use for:** Definitions, background framing, remodelling mechanism.

---

### 2. Kamal et al. (2026) `[review]`
*The extracellular matrix: structure, composition, biological functions, diseases, and therapeutic targets.*
Molecular Biomedicine 7:38. DOI 10.1186/s43556-026-00436-1

Title is generic; the actual subject is bidirectional ECM–epigenetics crosstalk. DNA methylation, histone modification and non-coding RNAs regulating ECM genes and remodelling enzymes; matrix stiffness feeding back on the epigenetic landscape via TGF-β, Wnt, PI3K/Akt.

Useful component taxonomy: interstitial matrix vs basement membrane, then collagens, elastin, GAGs/proteoglycans/glycoproteins, MMPs/TIMPs, LOX.

Tumor-specific epigenetic hits on ECM genes: integrin α4 (gastric), TIMP3 (oral), FBN2/IGFBP2 (colon), FBLN2 (NSCLC), COL7A1 (breast, prostate).

**Contains data?** No composition values. Gene-level regulatory findings only.
**Use for:** Component taxonomy — the basis for this atlas's structural subcategories. Epigenetic regulation layer.
**Note:** This link was supplied twice in the original reference set, so the set is four papers, not five.

---

### 3. iScience article — **UNIDENTIFIED**
`https://www.sciencedirect.com/science/article/pii/S2589004225027221`

ScienceDirect blocks automated retrieval and the PII did not resolve through search. **Action: ask Prof. Das for the title.**

---

### 4. Byrne CE et al. (2021) `[primary]`
*Evaluation of Extracellular Matrix Composition to Improve Breast Cancer Modeling.*
Tissue Engineering Part A 27(7-8):500–511. PMID 33797977, PMC8349725

The only bench study in the reference set, and the most directly relevant.

Findings: collagen content varied across breast subtypes, with COL I unexpectedly highest in less aggressive ER+/PGR+ tumors rather than TNBC, independent of age or race. ER+ and ER− lines cultured on collagen I, collagen IV, fibronectin and laminin showed no proliferation increase, but ER− cells were sensitised to both chemotherapy and targeted therapy. MDA-MB-231 morphology, binding affinity and stiffness differed by substrate. Matrix composition also shifted senescence-pathway transcription.

**Conclusion:** single-protein models (collagen I alone) are inadequate; composite matrices are required.
**Contains data?** Yes — subtype-wise collagen comparison, drug-response data.
**Use for:** The `collagen-1` entry; the general argument that composition is subtype-specific.

---

## Additional sources identified during scoping

### Global resources

**Izzi et al. (2019)** `[primary]` — pan-cancer matrisome expression across 10,487 patients and 32 TCGA tumor types, with transcription factor and master regulator analysis. **Closest prior art to this project.** Must be read properly and cited; the atlas needs to state how it differs.

**MatrisomeDB / Naba lab** `[dataset]` — the canonical matrisome gene list (~1,000 genes), split into core matrisome (collagens, glycoproteins, proteoglycans) and matrisome-associated (regulators, affiliated proteins, secreted factors). The indexing spine for structural factors.

**Nat Commun 2022, collagen XII** `[primary]` — PMC9357007. Temporal matrisome proteomics of decellularised breast tumors; identifies four matrisomal clusters and shows CAF-secreted collagen XII regulates collagen I organisation to create a pro-invasive environment. Good example of the measurement standard to aim for.

**Bharat Cancer Genome Atlas** `[review]` — Mahalingam, Scaria, Sivasubbu (2025), DOI 10.1177/15330338251381404. Position piece arguing that oral, head and neck, and gallbladder cancers are India-prevalent, rare elsewhere, molecularly distinct, and under-studied, while global targeted-therapy development rests on non-Indian genomic data. **Use for the project's justification section.**

### Indian sources

See `datasets/india-inventory.md` for the full table. Principal items:

- **GBC tissue proteomics**, Front Oncol 2023 (PMID 36686780) `[primary][india]` — ECM remodelling in early-stage Indian gallbladder cancer. **The single most relevant Indian ECM source found.**
- **GBC lymph node proteomics**, BMC Cancer 2023 (PMID 37142981) `[primary][india]` — HIF1 activation among top pathways
- **HIF-1α IHC, Northeast India OSCC** (PMC12181812) `[primary][india]`
- **HIF-1α/HIF-2α IHC**, 90 OSCC cases (DOI 10.7759/cureus.45189) `[primary][india]`
- **dbGENVOC** (PMC8163239) `[dataset][india]` — ~24M variants, Indian oral cancer
- **ICGA** (biorxiv 2025.03.25.645286) `[dataset][india]` — multi-omics breast cancer
- **Indian breast transcriptomics** (PMC9641000) `[primary][india]` — 17 tumor / 16 matched normal
- **Indian cervical expression profiling** (PMC3892388) `[primary][india]` — stage-wise, purity-screened

---

## Reading queue

- [ ] Izzi et al. 2019 — full read, abstract to methods
- [ ] GBC proteomics supplementary tables — extract matrisome protein values
- [ ] MatrisomeDB — download gene list
- [ ] Naba matrisome methodology papers
- [ ] Identify and read the missing iScience paper
