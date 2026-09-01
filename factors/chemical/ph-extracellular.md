# Extracellular pH (pHe)

**Category:** Chemical / soluble
**Subcategory:** Metabolic

---

## Short definition

The acidity of the interstitial fluid occupying the space between cells in a tumor. Distinct from intracellular pH, which in tumor cells is maintained at normal or slightly alkaline levels. This reversal of the normal pH gradient — acidic outside, neutral-to-alkaline inside — is characteristic of solid tumors.

## Measured as

pH units (dimensionless logarithmic scale). Lower values indicate greater acidity.

## Value in normal tissue

~7.4, with narrow physiological regulation across most soft tissues.

## Value in tumor tissue

~6.5–7.0 across most solid tumors. The most acidic regions are typically distant from functional vasculature and coincide with hypoxic zones, though acidity is also present in well-oxygenated tumor regions.

## Measurement method

| Method | Type | Notes |
|---|---|---|
| pH microelectrodes | Invasive, direct | Historical standard; single-point, disturbs tissue |
| CEST-MRI | Non-invasive imaging | Spatially resolved; requires contrast agent |
| Hyperpolarised ¹³C MRI | Non-invasive imaging | Measures bicarbonate/CO₂ ratio |
| pH-sensitive fluorescent probes | In vitro / preclinical | Used in spheroids and animal models |
| ³¹P MRS | Non-invasive | Older; poor spatial resolution |

Methods are not interchangeable. Microelectrode and imaging-derived values differ systematically, and imaging methods report volume-averaged pH that obscures local extremes.

## Mechanism

Tumor cells preferentially metabolise glucose via glycolysis to lactate even under adequate oxygen — the **Warburg effect**. This generates lactic acid and protons. Cells export these via monocarboxylate transporters (MCT1/MCT4), Na⁺/H⁺ exchangers (NHE1), and carbonic anhydrases (notably CA9, itself hypoxia-induced), maintaining internal pH while acidifying the exterior.

Disorganised, leaky tumor vasculature limits clearance of these products, allowing acid to accumulate rather than be washed out.

## Effects

1. **Facilitates invasion.** Acidic conditions degrade ECM components and normal tissue at the tumor margin, clearing a path for invading cells. Proposed as the "acid-mediated invasion" model.
2. **Suppresses anti-tumor immunity.** T-cell and NK-cell effector function is impaired at low pH. Contributes to immunotherapy resistance.
3. **Alters drug distribution.** Weakly basic drugs (e.g. doxorubicin, mitoxantrone) become protonated and trapped in the acidic extracellular space, reducing intracellular delivery. Known as ion trapping; a documented mechanism of chemoresistance.
4. **Activates matrix-degrading enzymes.** Several proteases and cathepsins have acidic pH optima.
5. **Selects for aggressive phenotypes.** Cells tolerant of acid stress are favoured, an evolutionary pressure toward more malignant behaviour.

## Connections

- ↔ **Hypoxia** — causally linked but not equivalent. Hypoxia forces glycolytic metabolism, so hypoxic regions are typically acidic; but the Warburg effect produces acidity in normoxic regions too. Correlated, partially independent. Keep as separate entries.
- ↔ **Lactate** — direct product of the same metabolic process. Lactate concentration and pHe covary but are separately measurable.
- ↔ **ECM / collagen** — acidity activates degradation enzymes acting on the scaffold.
- ↔ **Vascular density / perfusion** — confounded. Poor perfusion causes both hypoxia and acid retention.
- ↔ **Interstitial fluid pressure** — both consequences of abnormal tumor vasculature.

## Variation across tumor types

Highly glycolytic tumors reach the lower end of the range. Pancreatic ductal adenocarcinoma and glioblastoma are frequently cited as strongly acidic. Well-perfused and less glycolytic tumors are closer to normal.

*To be populated with sourced per-tumor-type values. Do not fill from memory.*

## Indian-specific data

**None found.** Searched September 2026 for Indian cohort measurements of tumor extracellular pH. No direct pHe measurement studies in Indian patient populations identified.

Adjacent Indian evidence exists via glycolytic markers rather than pH itself — a GLUT1 and HIF-1α immunohistochemistry study in Indian oral epithelial dysplasia and OSCC links the Warburg effect to tumor microenvironment alteration. This is an indirect proxy, not a pH measurement, and should be labelled as such.

**Gap classification:** No direct data. Proxy evidence only.

## Confidence

- **General phenomenon:** High. Extracellular acidification of solid tumors is established across decades of measurement and multiple independent methods.
- **Specific values:** Medium. Range is well supported, but individual figures are method-dependent and vary substantially by tumor region, tumor type, and measurement modality.

## Modelling notes

Usable parameter range: 6.4–7.4. Not spatially uniform — if modelling spatially, pH should be coupled to a perfusion or diffusion term rather than set as a bulk constant. Steepest gradients occur at 100–200 µm from vessels, matching the oxygen diffusion limit.

## Open questions

- How much of measured tumor acidity is Warburg-driven versus hypoxia-driven, and does the proportion differ by tumor type?
- Whether pH-normalising interventions (e.g. oral buffers) produce clinically meaningful change in humans.

## Sources

*To be completed. Required: at least one primary measurement paper for the value range, one for the ion-trapping mechanism, one for immune suppression. Do not cite reviews for numeric values.*

- [ ] Primary — pHe measurement range across solid tumors
- [ ] Primary — acid-mediated invasion
- [ ] Primary — pH and T-cell function
- [x] Proxy, Indian — GLUT1/HIF-1α in Indian OSCC and dysplasia (Research Square preprint, 2026) — see `literature/papers.md`
