# Interstitial fluid pressure (IFP)

**Category:** Chemical / soluble
**Subcategory:** Physical-chemical

---

## Short definition

Hydrostatic pressure of the fluid in the interstitial space between cells. Elevated in most solid tumors. Distinct from solid stress, which is the mechanical stress borne by the ECM and cells themselves - the two are frequently conflated and should be recorded separately.

Primarily significant as a barrier to drug delivery.

## Measured as

mmHg.

## Value in normal tissue

Approximately 0 mmHg, with slight negative values in some tissues.

## Value in tumor tissue

Elevated, commonly reported in the range of 10-40 mmHg, with higher values in some tumors.

*Requires sourcing from primary wick-in-needle measurement studies before recording as final.*

## Measurement method

| Method | Notes |
|---|---|
| Wick-in-needle | Reference method; invasive |
| Micropipette / servo-null | Micro-scale |
| Contrast-enhanced imaging (indirect) | Non-invasive proxy |

## Mechanism

Three contributing causes:

1. **Leaky vasculature.** Tumor vessels are structurally abnormal and permeable, allowing plasma to escape into the interstitium.
2. **Absent or dysfunctional lymphatics.** Tumors typically lack functional intratumoral lymphatic drainage, so escaped fluid is not cleared.
3. **Dense, contracted ECM.** Fibrotic matrix and CAF contraction compress vessels and resist fluid movement.

## Effects

1. **Impairs drug delivery.** Elevated IFP abolishes the pressure gradient that normally drives convective transport of large molecules from vessel to tissue. Particularly limiting for antibodies and nanoparticles.
2. **Promotes outward interstitial flow** at the tumor margin, which may facilitate cell migration and lymphatic metastasis.
3. **Contributes to hypoxia** by compressing vessels and reducing perfusion.
4. **Prognostic** in some settings; high IFP has been associated with poorer treatment response.

## Connections

- <-> **Hypoxia** - vessel compression reduces perfusion
- <-> **Extracellular pH** - impaired clearance of acidic metabolites
- <-> **Collagen I / stiffness** - dense matrix contributes to vessel compression
- <-> **Vascular density** - reciprocal

## Variation across tumor types

Highest in densely desmoplastic tumors, pancreatic prominently. PDAC solid stress values approach 10 kPa.

## Indian-specific data

**None found.** Searched September 2026. No IFP measurement in Indian cohorts identified.

**Gap classification:** No data. Globally under-measured, not only in India - IFP requires invasive intraoperative measurement, so datasets are small everywhere.

## Confidence

- **General phenomenon:** High.
- **Specific values:** Low-Medium. Few measurements, invasive method, small cohorts.

## Modelling notes

Relevant if modelling drug penetration. Couple to vascular permeability and lymphatic clearance terms. Distinguish from solid stress in any mechanical model.

## Sources

- [ ] Primary - wick-in-needle IFP measurements across tumor types (Jain lab)
- [ ] Primary - IFP and macromolecular drug delivery
- [x] Review - PDAC solid stress, J Clin Med 2021;10:2711
