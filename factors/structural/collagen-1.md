# Collagen type I

**Category:** Structural
**Subcategory:** Collagen

**Genes:** `COL1A1` (HGNC:2197, UniProt P02452), `COL1A2` (HGNC:2198, UniProt P08123)

---

## Short definition

The principal fibrillar collagen of the interstitial extracellular matrix and the most abundant protein in the human body. Forms triple-helical fibrils that provide tensile strength. In tumors it accumulates as part of the desmoplastic response, and both its abundance and its spatial organisation change.

Organisation matters as much as abundance — a point frequently missed. Two tumors with identical collagen I content can differ substantially in behaviour depending on fibre alignment.

## Measured as

Several distinct quantities, not interchangeable:

- **Transcript:** COL1A1/COL1A2 expression (TPM, FPKM, or fold-change)
- **Protein abundance:** mass-spectrometry intensity, or IHC score
- **Area fraction:** percentage of tissue area staining positive (picrosirius red, Masson's trichrome)
- **Fibre organisation:** alignment angle relative to tumor boundary; TACS (Tumor-Associated Collagen Signature) 1/2/3 classification
- **Mechanical contribution:** elastic modulus in kPa (see separate `stiffness` entry)

## Value in normal tissue

Present throughout interstitial matrix. In normal mammary gland, fibres surrounding epithelial structures are curly and anisotropic, and collagen I directs tissue and cell polarity during mammary epithelial branching.

## Value in tumor tissue

Accumulates in desmoplastic tumors. Fibres progressively thicken and linearise during progression; radial alignment relative to the tumor boundary is associated with invasion.

**Important counterexample worth recording:** in a study of Indian-relevant subtype comparison, collagen I content in breast tumors was found to be *higher* in less aggressive ER+/PGR+ tumors than in triple-negative tumors, independent of age or race. The assumption "more collagen = more aggressive" does not hold universally.

## Measurement method

| Method | Measures | Notes |
|---|---|---|
| Picrosirius red + polarised light | Fibre content and organisation | Cheap, widely available |
| Second harmonic generation (SHG) microscopy | Fibrillar collagen, label-free | Best for organisation/alignment |
| IHC | Protein presence | Semi-quantitative |
| Mass spectrometry / matrisome proteomics | Absolute-ish abundance | Requires ECM enrichment or decellularisation |
| RNA-seq (COL1A1) | Transcript proxy | **Confounded by stromal content — see caveat** |

## Critical caveat: stromal confounding

Collagen I is produced mainly by fibroblasts, not by tumor cells. In bulk RNA-seq, COL1A1 expression therefore partly measures *how much stroma was in the biopsy* rather than a tumor-intrinsic property. Tumor purity varies by cancer type, by sampling, and by institution.

Any transcript-level collagen analysis must either adjust for tumor purity or report it as a covariate. This applies to essentially all matrisome genes and is documented separately in `docs/`.

## Mechanism

Deposited largely by cancer-associated fibroblasts (CAFs) in response to TGF-β and other signals from tumor cells. Crosslinked by lysyl oxidase (LOX), which is itself hypoxia-inducible — another direct chemical-to-structural link. Degraded and remodelled by MMPs, particularly MMP1, MMP2, MMP14.

## Effects

1. **Increases tissue stiffness**, which drives integrin clustering and mechanotransduction via FAK/Src, PI3K/AKT, and YAP/TAZ.
2. **Aligned fibres act as migration highways** — linearised, radially oriented collagen provides directional tracks for invading cells.
3. **Physical barrier to drug and immune cell penetration** in densely fibrotic tumors.
4. **Alters drug response.** Breast cancer cells cultured on different matrix proteins showed altered sensitivity to chemotherapy and targeted therapy, along with changes in morphology, binding affinity and stiffness — with no accompanying change in proliferation.

## Connections

- ↔ **Stiffness** — collagen I content and crosslinking are principal determinants.
- ↔ **LOX** — crosslinks collagen; hypoxia-inducible, linking to the HIF entry.
- ↔ **TGF-β** — drives CAF collagen production.
- ↔ **Collagen XII** — regulates collagen I organisation; CAF-secreted collagen XII alters collagen I architecture to create a pro-invasive environment.
- ↔ **MMPs** — degrade and remodel.
- ↔ **Tumor purity** — methodological confound for all transcript-level measurement.

## Variation across tumor types

Highest in desmoplastic tumors — pancreatic, breast, some gastric. Within breast, the subtype relationship is not monotonic (see above).

*To be populated with sourced per-tumor-type values.*

## Indian-specific data

**Very limited.** No Indian collagen I quantification study identified as of September 2026.

Closest available: iTRAQ tissue proteomics of Indian early-stage gallbladder cancer (12 GBC vs 6 gallstone-disease controls, ICMR-NIP Delhi / GIPMER) reported remodelling of extracellular matrix proteins among its principal findings. Individual collagen values would need extracting from that study's supplementary tables.

**Gap classification:** No direct Indian data. One adjacent proteomics dataset that may contain extractable values.

## Confidence

- **General phenomenon:** High for accumulation and reorganisation in desmoplastic tumors.
- **Specific values:** Low. Cross-study comparison is poor because measurement modalities differ and purity correction is inconsistently applied.

## Open questions

- Whether the ER+/PR+ vs TNBC collagen inversion replicates in Indian cohorts, where breast cancer presents at younger age and with different subtype distribution.
- Extent to which published transcript-level collagen findings survive purity correction.

## Sources

- [x] Primary — Byrne et al., Evaluation of Extracellular Matrix Composition to Improve Breast Cancer Modeling, Tissue Eng Part A 2021;27(7-8):500–511, PMID 33797977
- [x] Primary — Collagen XII and collagen I organisation, Nat Commun 2022, PMC9357007
- [x] Primary, Indian, adjacent — GBC tissue proteomics, Front Oncol 2023, PMID 36686780
- [x] Review — Dzobo & Dandara, Biomimetics 2023;8(2):146
- [ ] Primary — collagen I stiffness contribution in kPa, per tumor type
