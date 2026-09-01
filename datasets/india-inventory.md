# Indian Cohorts and Datasets

Inventory of Indian patient data relevant to tumor microenvironment characterisation. Compiled September 2026.

**Headline finding:** Indian TME data is strongly asymmetric. Hypoxia markers in oral cancer are reasonably covered. ECM/matrisome characterisation is close to absent, with one gallbladder proteomics study as the principal exception. Most Indian studies report results in tables rather than depositing raw data, so reanalysis is limited.

---

## Browsable databases

### ICGA — Indian Cancer Genome Atlas
- **Content:** Multi-omics — WGS (~70X), total RNA-seq, proteomics, with clinical metadata and follow-up
- **Cohort:** Treatment-naive Indian women, 18–75, ER+/PR+/HER2− breast cancer, across multiple institutions. Tumor tissue, adjacent normal, and blood
- **Size:** First release 50 patients, stated plan to scale to 500+
- **Platform:** cBioPortal
- **Access:** Controlled open access under PRIDE guidelines
- **Relevance:** The only Indian resource with proteomics alongside transcriptomics. The realistic route to Indian matrisome analysis
- **Status:** Access not yet requested — **action item, requests take time**

### dbGENVOC — Database of Genomic Variants of Oral Cancer
- **Content:** ~24 million somatic and germline variants from Indian oral cancer patients — exomes (n=100), whole genomes (n=5). TCGA and curated literature variants included for comparison
- **Host:** National Institute of Biomedical Genomics, Kalyani
- **URL:** research.nibmg.ac.in/dbcares/dbgenvoc/
- **Access:** Free, browsable, queryable by gene, region, patient ID, pathway
- **Relevance:** Variant-level only. Does not provide expression or composition. Feeds a genetic-background block, not a TME factor block

---

## Gallbladder cancer — best ECM coverage

India has disproportionately high GBC incidence, making this both scientifically important and under-studied globally.

| Study | Design | Cohort | Key finding | Ref |
|---|---|---|---|---|
| Early-stage GBC tissue proteome | iTRAQ quantitative proteomics | Stage I n=7, stage II n=5, gallstone-disease controls n=6 | **ECM protein remodelling** and neutrophil degranulation as major deregulated processes | Front Oncol 2023, PMID 36686780 |
| GBC lymph node metastasis proteome | iTRAQ | 12 GBC vs 6 GSD | 357 DEPs; neutrophil degranulation and **HIF1 activation** top pathways; KRT7, SRI overexpressed in LN+ | BMC Cancer 2023, PMID 37142981 |
| Genomic profiling of Indian GBC | NGS panels | 376 patients (339 tissue, 37 plasma cfDNA), 2022–2024 | Region-specific mutation map; ERBB2 enrichment (S310FY); benchmarked vs international cohorts | JCO Glob Oncol, DOI 10.1200/GO-25-00332 |
| GBC GWAS | Case-control | Tata Memorial + SGPGI Lucknow | Common variant risk loci | Lancet Oncol, PMID 28274756 |

**Institutions:** ICMR-National Institute of Pathology Delhi, GIPMER Delhi, Institute of Bioinformatics Bangalore, ILBS National Liver Disease Biobank, Tata Memorial, Amrita Faridabad.

**Note:** The two proteomics papers are the single most directly relevant Indian ECM source found. Supplementary tables likely contain per-protein values including matrisome members. **Priority action: extract these.**

---

## Oral cancer / OSCC — best hypoxia coverage

| Study | Design | Cohort | Relevance | Ref |
|---|---|---|---|---|
| HIF-1α IHC, Northeast India | Retrospective IHC | Resected OSCC, 2020–2024 | First for this region; notes NE Indian populations genetically closer to East Asian groups | PMC12181812 |
| HIF-1α / HIF-2α IHC | Retrospective IHC | 90 archival FFPE blocks, Kalinga Inst. Dental Sciences, Bhubaneswar | Dual-factor hypoxia assessment | DOI 10.7759/cureus.45189 |
| GLUT1 + HIF-1α | Cross-sectional IHC | Oral dysplasia and OSCC | Links hypoxia to Warburg effect and glucose uptake | Research Square rs-10569258 |
| Salivary PKCα and miRNAs | RNA-seq, saliva | Indian cohorts, Rajiv Gandhi Cancer Institute Delhi | Non-invasive markers; resistance | PMC9871261 |
| HCG22 salivary lncRNA | Public RNA-seq + Indian validation cohort | Reanalyses PRJNA327548, PRJNA775998, PRJNA947509, PRJNA1031181 | **Contains SRA accessions — reusable raw data** | medRxiv 2025.07.30.25332447 |

---

## Breast cancer

| Study | Design | Cohort | Ref |
|---|---|---|---|
| ICGA | WGS + RNA-seq + proteomics | 50 → 500 patients | biorxiv 2025.03.25.645286 |
| Transcriptomic profiling, Indian BC | RNA-seq, subtype-specific mRNA + lncRNA signatures | 17 tumor, 16 matched normal, BGS Global Hospital Bengaluru; six receptor-defined subtypes | PMC9641000 |

Indian breast cancer presents at younger age than Western cohorts — relevant confounder for any cross-cohort comparison.

---

## Cervical cancer

| Study | Design | Cohort | Ref |
|---|---|---|---|
| Stage-wise expression profiling | Microarray, 19K arrays | Indian women, staged; **only samples ≥50% tumor cells included** — purity screening documented | PMC3892388 |
| Somatic variations | Whole exome + matched blood | 10 treatment-naive, ACTREC/Tata Memorial | PMC5102491 |

---

## Head and neck / general

- Institute of Bioinformatics Bangalore — long-running HNSCC proteomics programme, tissue from Kidwai Memorial Institute of Oncology (e.g. PMC6139602)
- *Cancer proteomics in India*, Nature India 2015 — overview of Indian proteomics groups and history; useful for identifying labs and potential collaborators

---

## Gaps — stated explicitly

| Factor | Indian data status |
|---|---|
| Hypoxia / HIF-1α | **Present** — multiple OSCC IHC studies, one GBC proteomics signal |
| ECM / matrisome | **Near-absent** — one GBC proteomics study only |
| Extracellular pH | **None found** — proxy only via GLUT1/HIF-1α |
| Tissue stiffness | **None found** |
| Lactate / metabolites | **None found** |
| Interstitial fluid pressure | **None found** |
| Hormone receptor status | Present as clinical annotation, not as microenvironment measurement |
| CAF subtypes | **None found** |

## Structural limitations of the Indian evidence base

1. **Little raw data deposition.** ICGA and dbGENVOC are the only browsable resources. Most studies report only summary tables.
2. **Small cohorts.** Several key studies are n=10–20.
3. **Single-centre designs.** Limits generalisability across a genetically and environmentally heterogeneous population.
4. **Regional heterogeneity is real and under-acknowledged.** The Northeast India OSCC study explicitly notes distinct population genetics. "Indian data" should not be treated as one category.
5. **Method skew toward IHC.** Cheap and archival-compatible, but semi-quantitative and poorly standardised across studies.
