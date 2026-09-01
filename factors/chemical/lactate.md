# Lactate

**Category:** Chemical / soluble
**Subcategory:** Metabolite

**Related genes:** `LDHA` (HGNC:6535), `SLC16A1`/MCT1 (HGNC:10922), `SLC16A3`/MCT4 (HGNC:10924)

---

## Short definition

End product of anaerobic and aerobic glycolysis, exported from tumor cells into the extracellular space. Long treated as inert metabolic waste; now understood as an active signalling molecule and immunosuppressive agent in its own right.

Distinct from extracellular pH: lactate and protons are co-exported but separately measurable, and lactate has pH-independent signalling effects.

## Measured as

mM (millimolar) concentration in tissue or interstitial fluid.

## Value in normal tissue

~1-2 mM in most tissues at rest. Rises transiently in exercising muscle.

## Value in tumor tissue

Commonly cited as elevated several-fold, with reported tumor values spanning roughly 4-40 mM depending on tumor type and region.

*Values require sourcing from primary bioluminescence imaging studies before being recorded as final. Do not fill from memory.*

## Measurement method

| Method | Notes |
|---|---|
| Induced metabolic bioluminescence imaging (imBI) | Quantitative, spatially resolved, on cryosections; the reference method |
| Microdialysis | In vivo sampling, invasive |
| Hyperpolarised 13C MRI | Non-invasive; measures pyruvate-to-lactate conversion rate rather than absolute concentration |
| Mass spectrometry / metabolomics | Bulk tissue; loses spatial information |
| LDHA / MCT4 IHC | Proxy for lactate production or export, not concentration |

## Mechanism

Glycolytic flux (Warburg effect) converts pyruvate to lactate via LDHA. Export occurs through MCT4 primarily; MCT1 mediates uptake by oxidative tumor cells, producing metabolic symbiosis where hypoxic glycolytic cells feed lactate to oxygenated cells that consume it as fuel.

## Effects

1. **Immunosuppression.** Impairs T-cell and NK-cell function and cytokine production; promotes regulatory T-cell and M2 macrophage phenotypes. Partly pH-independent.
2. **Angiogenesis.** Stimulates VEGF production and endothelial migration.
3. **Metabolic fuel.** Consumed by oxidative tumor cells and by stromal cells.
4. **Histone lactylation.** Lactate-derived post-translational modification of histones, an epigenetic mechanism linking metabolism to gene expression. Connects directly to the ECM-epigenetics axis in the Kamal review.
5. **Prognosis.** High tumor lactate has been associated with increased metastasis and poorer survival in several tumor types.

## Connections

- <-> **Extracellular pH** - co-produced; correlated but separable
- <-> **Hypoxia** - hypoxia drives glycolysis via HIF-1a induction of LDHA and GLUT1
- <-> **Glucose** - substrate; glucose depletion and lactate accumulation are two faces of the same process
- <-> **Immune infiltration** - lactate is a direct immunosuppressive agent

## Variation across tumor types

Highest in strongly glycolytic tumors. Head and neck, cervical, and colorectal are frequently studied with imBI.

*To be populated with sourced values.*

## Indian-specific data

**None found.** Searched September 2026. No Indian tumor lactate measurement studies identified.

Indirect: GLUT1 immunohistochemistry in Indian oral dysplasia and OSCC establishes increased glucose uptake with disease severity, which implies but does not measure lactate accumulation.

**Gap classification:** No direct data. Upstream proxy only.

## Confidence

- **General phenomenon:** High for elevation and for immunosuppressive effect.
- **Specific values:** Low until primary imBI sources are read and recorded.

## Modelling notes

If modelling spatially, couple to glycolytic rate and perfusion rather than imposing a bulk value. Lactate and pH should not be modelled as a single variable despite their correlation.

## Sources

- [ ] Primary - imBI lactate concentrations across tumor types (Walenta / Mueller-Klieser group)
- [ ] Primary - lactate and T-cell suppression
- [ ] Primary - histone lactylation
- [x] Proxy, Indian - GLUT1/HIF-1a in Indian OSCC, Research Square rs-10569258
