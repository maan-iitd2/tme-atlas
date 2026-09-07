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

**Resolution attempts, 2026-09-02:** the PII was additionally queried against the Crossref API restricted to the iScience ISSN (2589-0042) for 2025 publications, returning zero results. Web search on the PII returned no matching article. The identifier does not resolve through any open route tried. This is now a verified negative rather than an unchecked gap — the title has to come from the person who supplied the link.

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

**MatrisomeDB / Naba lab** `[dataset]` — the canonical matrisome gene list (~1,000 genes), split into core matrisome (collagens, glycoproteins, proteoglycans) and matrisome-associated (regulators, affiliated proteins, secreted factors). The indexing spine for structural factors.

**Nat Commun 2022, collagen XII** `[primary]` — PMC9357007. Temporal matrisome proteomics of decellularised breast tumors; identifies four matrisomal clusters and shows CAF-secreted collagen XII regulates collagen I organisation to create a pro-invasive environment. Good example of the measurement standard to aim for.

**Singh, Grover & Dhanasekaran (2025)** `[primary][india]` — *Cervical cancer burden in India: a descriptive epidemiological study and policy insights.* Global Epidemiology 10:100233. PMID 41399754, DOI 10.1016/j.gloepi.2025.100233. GLOBOCAN 2022 derived: 127,526 new cases and 79,906 deaths in India, ASIR 17.7 per 100,000, second most common cancer among Indian women, over 65% of the Southeast Asia regional burden. **Retrieved and read 2026-09-02.** Supplies the incidence half of the cervical-gap argument, which was previously asserted without a source.

**Izzi V, Lakkala J, Devarajan R, Kaariainen A, Koivunen J, Heljasvaara R, Pihlajaniemi T (2019)** `[primary]` — *Pan-Cancer analysis of the expression and regulation of matrisome genes across 32 tumor types.* Matrix Biology Plus 1:100004. DOI 10.1016/j.mbplus.2019.04.001, PMID 33543003, PMC7852311. Open access. **Read 2026-09-02.**

**Closest prior art to this project.** Read in full; figures not yet examined in detail.

*Data and method:* TCGA Pan-Cancer RNA-seq (Toil pipeline, RSEM-normalised), 10,487 patients across 32 tumor types, 99.27% primary tumors. 820 matrisome genes, 79.76% of the Matrisome Project's 1,028. Healthy comparison from TCGA and GTEx. Pipeline: three classifiers (SVM, neural network, C5.0) for clustering; TF module inference by consensus across TRRUST, ENCODE, Marbach and MSigDB with FANTOM5 promoter validation, then adaptive lasso, sparse Bayesian network and mixed graphical model; master regulators by driver-gene filtering on mutation frequency and BioGrid protein-protein interaction; KEGG enrichment; Kaplan-Meier survival; DGIdb for drug interactions.

*Findings:* matrisome expression classifies tumor type at 95% average recall. 29 tumor-specific matrisome signatures. 919 TF-target modules across 28 tumor types, 85.2% of them tumor-specific. Hub TFs are rare - about 89% of TFs have only one or two matrisome targets. 233 modules associate with differential survival, most prevalent in low-grade glioma and pancreatic (>50%). 40 master regulators, averaging ~14 per tumor with ~3 cancer-specific; TP53 and P300 act as network hubs. 31 overarching regulatory pathways, with cell adhesion and transcriptional pathways (FoxO, Wnt, microRNAs) active in 100% of tumor types. Druggability screening suggests off-label repurposing, e.g. axitinib and dactinomycin against CSF1 in glioma and kidney tumors.

*Authors' stated limitations:* drug predictions need experimental validation; metastatic and recurrent tumors are barely represented; protein-level cross-validation was possible for only 22 of 32 tumor types; pathway activation by mutation was infrequent; tissue-of-origin effects confound the similarity analysis.

*Contains data?* Yes, at transcript level only. No demographic or ethnicity breakdown is reported. Code and derived data are "available upon request" - there is no public repository or browsable resource.

**How this atlas differs, stated for the record:**
1. *Level.* Izzi is transcript-level. This atlas records measured physical and chemical quantities with units and methods. A model cannot be parameterised from a normalised expression value.
2. *Scope.* 820 matrisome genes is ECM only - a subset of one of this atlas's two categories. It covers none of pH, oxygen tension, lactate, interstitial fluid pressure or stiffness.
3. *Absence.* A TCGA expression matrix has a value in every cell and therefore cannot represent "nobody has measured this". Representing that is this atlas's contribution.
4. *Population.* No ethnicity reporting; TCGA is overwhelmingly non-Indian. The Indian coverage question is untouched.
5. *Availability.* Code on request rather than a public resource.

**Use for:** populating the transcript tier of `data/coverage.csv`, once its supplementary data is checked for a usable per-tumor-type breakdown. Also cite as prior art in any framing of this project's contribution. See `docs/analysis.md` for the modelling-specific assessment.

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

- [x] Izzi et al. 2019 — read 2026-09-02. Differentiation stated in the entry above and in `docs/analysis.md`
- [ ] Izzi et al. 2019 supplementary data — check for a per-tumor-type breakdown usable for the transcript tier
- [ ] GBC proteomics supplementary tables — extract matrisome protein values
- [ ] MatrisomeDB — download gene list
- [ ] Naba matrisome methodology papers
- [ ] Identify and read the missing iScience paper
