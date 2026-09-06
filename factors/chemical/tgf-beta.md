# TGF-beta

**Category:** Chemical / soluble
**Subcategory:** Growth factor / cytokine

**Genes:** `TGFB1` (HGNC:11766, UniProt P01137), `TGFB2`, `TGFB3`

---

## Short definition

Transforming growth factor beta. A secreted cytokine and the principal driver of fibroblast activation and ECM deposition. The main molecular bridge between the chemical and structural factor categories: TGF-beta signalling is what causes CAFs to lay down the collagen that produces desmoplasia and stiffness.

Notable for context-dependent behaviour - tumor-suppressive in early disease, tumor-promoting in established disease. This switch is one of the better-documented paradoxes in tumor biology.

## Measured as

- Protein concentration, pg/mL or ng/mL, in tissue lysate, plasma, or conditioned medium
- `TGFB1` transcript expression
- Pathway activity via phospho-SMAD2/3 immunostaining
- TGF-beta response gene signatures from RNA-seq

## Value in normal tissue

Present at low levels; latent stores held in the matrix.

## Value in tumor tissue

Elevated in most solid tumors; activation from latent stores increases with matrix remodelling and mechanical strain.

*Absolute values require sourcing.*

## Measurement method

| Method | Measures | Notes |
|---|---|---|
| ELISA | Protein concentration in lysate, plasma, or conditioned medium | The common quantitative assay; reports total after artificial activation unless stated |
| Phospho-SMAD2/3 IHC | Pathway activity in situ | Reports downstream signalling, not ligand concentration; spatially resolved |
| RNA-seq / `TGFB1` expression | Transcript abundance | Proxy only — poor predictor of secreted, matrix-bound protein |
| TGF-beta response gene signature | Pathway activity from bulk transcriptomics | Used for stromal signature scoring; not a concentration |

**Critical measurement caveat:** TGF-beta is secreted in a latent, inactive complex bound to the ECM. Total TGF-beta and *active* TGF-beta are different quantities, and most assays measure total after artificial activation. Always record which.

*Per-method value ranges require sourcing before being recorded.*

## Mechanism

Secreted by tumor cells, platelets, macrophages, and CAFs as a latent complex bound to LTBP and stored in the ECM. Activated by integrin-mediated mechanical force, by proteases (MMPs, plasmin), and by low pH.

Active TGF-beta binds TGFBR2/TGFBR1, phosphorylating SMAD2/3, which complex with SMAD4 and enter the nucleus to drive transcription of collagens, fibronectin, and other matrisome genes.

**Note the feedback loop:** TGF-beta drives matrix deposition -> matrix stiffens -> mechanical force activates more latent TGF-beta -> more deposition. Self-reinforcing, and a plausible explanation for why desmoplasia progresses rather than plateauing.

## Effects

1. **CAF activation and ECM deposition.** The principal driver of desmoplasia.
2. **EMT induction.** Canonical inducer of epithelial-mesenchymal transition.
3. **Immune suppression.** Inhibits effector T-cell function; drives regulatory T-cell differentiation. TGF-beta signalling in the stroma is associated with immune exclusion and immunotherapy resistance.
4. **Angiogenesis modulation.**
5. **Growth inhibition (early disease).** Cytostatic in normal and premalignant epithelium; tumors escape this arm while retaining the stromal arm.

## Connections

- <-> **Collagen I** - TGF-beta drives its production. The primary chemical-to-structural link.
- <-> **Stiffness** - bidirectional; stiffness activates latent TGF-beta, TGF-beta increases stiffness
- <-> **ECM as reservoir** - TGF-beta is stored in the matrix, so matrix degradation releases it
- <-> **Extracellular pH** - low pH contributes to latent complex activation
- <-> **Immune infiltration** - major immunosuppressive signal
- <-> **Epigenetics** - TGF-beta is one of the pathways through which stiffness reshapes the epigenetic landscape (Kamal et al. 2026)

## Variation across tumor types

Highest relevance in desmoplastic tumors - pancreatic, breast, colorectal. TGF-beta stromal signatures are established markers of immunotherapy non-response in colorectal and urothelial cancer.

## Indian-specific data

**None found as a direct microenvironment measurement.** Searched September 2026.

TGFB1 expression may be extractable from Indian transcriptomic datasets (ICGA breast, Indian breast RNA-seq cohort n=17/16, Indian cervical microarray) as a secondary analysis. This is a realistic near-term action rather than a gap requiring new experiments.

**Gap classification:** No dedicated study. Extractable from existing Indian expression datasets.

## Confidence

- **General phenomenon:** High. Among the best-characterised pathways in tumor biology.
- **Specific values:** Low. Latent-versus-active distinction makes absolute concentrations hard to compare across studies.

## Modelling notes

If modelling, the latent-to-active conversion step matters more than total abundance and is force-dependent. Treating TGF-beta as a freely diffusing morphogen ignores that most of it is matrix-bound.

## Sources

- [x] Review - Kamal et al. 2026, Mol Biomed 7:38 - TGF-beta in ECM-epigenetics crosstalk
- [x] Review - Dzobo & Dandara 2023, Biomimetics 8(2):146
- [ ] Primary - latent TGF-beta mechanical activation
- [ ] Primary - TGF-beta stromal signature and immunotherapy resistance
