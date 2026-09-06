# Tissue stiffness (elastic modulus)

**Category:** Structural
**Subcategory:** Mechanical property

---

## Short definition

Resistance of tissue to deformation under applied force, reported as Young's (elastic) modulus. The emergent mechanical consequence of ECM composition, density, and crosslinking rather than a molecule in its own right. Cells sense stiffness directly through integrin-mediated adhesion and convert it into intracellular signalling.

Tissue is also viscoelastic, not purely elastic — it both resists and dissipates force. Most literature reports elasticity alone, which is an incomplete description.

## Measured as

- **Young's / elastic modulus:** kPa (kilopascals). Higher = stiffer.
- **Steady-state modulus (SSM):** kPa, from rheometry
- **Viscosity:** kPa·s — separately measurable, usually ignored
- **Shear wave speed:** m/s, from clinical elastography

## Value in normal tissue

All values are method-specific. Do not compare across rows from different methods — see `Measurement method` below.

| Tissue | Value | Method |
|---|---|---|
| Normal breast | 1.4 ± 0.91 kPa | AFM |
| Normal breast (independent study) | 1.13–1.83 kPa peak | AFM |
| Healthy pancreas | ~1 kPa | AFM, upper-quartile mean |
| Normal pancreas | 1.06 ± 0.25 kPa SSM, 252 ± 134 kPa·s viscosity | Rheometry |

## Value in tumor tissue

| Tissue | Value | Method |
|---|---|---|
| Breast tumor (NST) | 3.3 ± 3.4 kPa | AFM |
| Breast, malignant (independent study) | 1.54–9.62 kPa peak | AFM |
| PanIN (pancreatic precursor lesion) | ~2 kPa | AFM, upper-quartile mean |
| PDAC | ~4 kPa | AFM, upper-quartile mean |
| Pancreatitis | 2.15 ± 0.41 kPa SSM, 63.2 ± 26.7 kPa·s | Rheometry |
| PDAC | 5.46 ± 3.18 kPa SSM, 349 ± 222 kPa·s | Rheometry |

Breast tumor tissue showed dense fibrotic stroma with elastic modulus two to three times higher than normal breast. Pancreatic AFM values are reported as upper-quartile means, because mechanosensitivity is dominated by the stiffer regions rather than the tissue average.

**Kidney and thyroid — the important counterexample:**
Clear cell renal carcinoma and poorly differentiated thyroid carcinoma showed *decreased* elastic modulus relative to normal tissue. "Tumors are stiffer" is not universal. In thyroid, papillary carcinoma was significantly stiffer than normal while follicular adenocarcinoma was not — the direction of change is subtype-dependent.

## Measurement method

| Method | Scale | Notes |
|---|---|---|
| AFM | Micro (µm) | Cell-relevant scale; values depend strongly on probe size, indentation rate, and Hertz-model fitting |
| Rheometry | Bulk | Gives viscoelastic parameters including viscosity |
| Shear wave / harmonic motion elastography | Clinical, in vivo | Non-invasive; different absolute values from AFM |
| Optical trap microrheology | Micro | Frequency-dependent |

**Method dependence is severe.** One study using an optical trap found human breast tumor moduli of ~5 Pa to ~1000 Pa — roughly two orders of magnitude below AFM values on comparable tissue. Never compare stiffness values across measurement modalities without saying so.

**Cellular vs decellularised:** in mammary tumor tissue, 30% of stiffness values in intact tumor exceeded 100 kPa versus 16% in decellularised samples; decellularised tissue showed a trimodal profile with a maximum at 0.52 ± 0.01 kPa and enriched regimes at 5–10 and 15–25 kPa. Removing cells gives a cleaner picture of the ECM's own contribution, which is the relevant quantity for designing biomimetic scaffolds.

## Mechanism

Driven by collagen I deposition by CAFs and crosslinking by LOX (hypoxia-inducible). Stiffness is spatially heterogeneous within a single tumor — malignant tissue shows a broader modulus distribution than normal or benign tissue, so a single mean value discards most of the information.

## Effects

1. **Mechanotransduction.** Integrin clustering → FAK/Src → PI3K/AKT, ERK, YAP/TAZ nuclear translocation.
2. **EMT and chemoresistance.** Matrix stiffness induces EMT and promotes chemoresistance in pancreatic cancer cells.
3. **Drug response.** In breast cancer, reductions in tumor stiffness correlate positively with treatment response.
4. **Cell morphology.** Cells cultured at 25 kPa (breast tumor stiffness) versus 0.5 kPa (normal breast) show markedly different morphology.
5. **Cell-line dependence.** Rigidity response is an intrinsic property of each cancer line — some grow faster as rigidity increases, others grow equally well across a wide range.

## Connections

- ↔ **Collagen I** — principal determinant
- ↔ **LOX** — crosslinking; hypoxia-inducible, linking chemical to structural
- ↔ **Hypoxia** — via LOX induction
- ↔ **Interstitial fluid pressure** — related but distinct; solid stress vs fluid pressure

## Variation across tumor types

Mechanical alteration is tumor-type and subtype dependent, and directionally inconsistent. PDAC is among the stiffest malignancies, with solid stress values approaching 10 kPa. Renal and some thyroid carcinomas soften. High-grade invasive ductal breast carcinoma shows the largest increase among breast types.

## Indian-specific data

**None found.** Searched September 2026. No AFM, rheometry, or elastography stiffness characterisation of Indian tumor cohorts identified.

**Gap classification:** No data. This is a clear, concrete gap — and a directly addressable one for a biotech/biochemical engineering lab with AFM or rheometry access.

## Confidence

- **General phenomenon:** Medium-High. Well established for breast and pancreatic; explicitly contradicted for renal and some thyroid.
- **Specific values:** Low-Medium. Method-dependent to the point that cross-study pooling is unsafe.

## Modelling notes

Usable ranges (AFM, tissue-level): normal soft tissue 0.5–1.5 kPa; breast tumor 3–10 kPa; PDAC 4–10 kPa, upper tail higher. If building hydrogels or scaffolds, decellularised values are the right target. Model as a distribution, not a mean — the breadth of the distribution is itself diagnostic.

## Open questions

- Why renal and thyroid tumors soften while breast and pancreatic stiffen.
- Whether viscosity adds diagnostic value over elasticity alone — elastic values overlap between pancreatitis (1.52–2.80 kPa) and PDAC (1.89–13.7 kPa), so elasticity alone cannot separate inflammation from tumor.
- Standardisation across AFM protocols.

## Sources

- [x] Primary — Mechanical properties of breast, kidney and thyroid tumours by AFM, bioRxiv 2022.06.09.495321
- [x] Primary — Matrix stiffness induces EMT and chemoresistance in pancreatic cancer, Oncogenesis 2017, DOI 10.1038/oncsis.2017.54
- [x] Primary — Viscoelastic properties of human pancreatic tumors, PMC5797706
- [x] Primary — Mechanogenetic link between substrate stiffness and chemotherapeutic response in breast cancer, PMC6474249
- [ ] Primary — Plodinec et al., nanomechanical signature of breast cancer
- [ ] Indian cohort measurement — **does not exist; candidate experiment**
