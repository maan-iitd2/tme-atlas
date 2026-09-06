# Oestrogen and hormone receptor signalling

**Category:** Chemical / soluble
**Subcategory:** Hormone

**Genes:** `ESR1` (HGNC:3467, UniProt P03372), `PGR` (HGNC:8910), `AR` (HGNC:644)

---

## Short definition

Steroid hormones circulating systemically and acting on tumors that express the corresponding nuclear receptors. Unlike most microenvironment factors, hormones are largely *systemic* rather than locally generated - though local aromatase activity in adipose tissue produces oestrogen within the breast microenvironment itself.

Tumor-type specific rather than universal: oestrogen and progesterone in breast, androgens in prostate, with insulin and IGF-1 acting more broadly.

## Measured as

- **Receptor status:** ER, PR, HER2 by immunohistochemistry - percentage of positive nuclei, with clinical cut-offs (commonly >=1% for ER positivity)
- **Circulating hormone levels:** pg/mL or nmol/L in serum
- **Local aromatase activity** in adipose tissue
- **`ESR1` transcript expression** in RNA-seq

## Value in normal tissue

Physiological, varying with menstrual cycle, menopausal status, parity, and BMI. Postmenopausal oestrogen derives largely from peripheral aromatisation in adipose tissue rather than the ovary - which is why obesity is a breast cancer risk factor in postmenopausal women.

## Value in tumor tissue

Receptor status is the clinical variable. Roughly 70-80% of breast cancers in Western cohorts are ER-positive; the Indian distribution differs (see below).

## Measurement method

| Method | Measures | Notes |
|---|---|---|
| Immunohistochemistry (ER / PR / HER2) | Percentage of positive tumor nuclei | The clinical standard. Semi-quantitative; scoring and cut-offs vary between laboratories, commonly >=1% for ER positivity |
| Serum hormone assay | Circulating oestrogen, pg/mL or nmol/L | Systemic level, not the local tissue concentration |
| Aromatase activity assay | Local oestrogen synthesis in adipose tissue | The relevant measure for postmenopausal disease, where oestrogen is largely peripheral in origin |
| RNA-seq / `ESR1` expression | Transcript abundance | Proxy for receptor status; correlates imperfectly with IHC |

**Measurement caveat:** receptor status and local hormone concentration are different quantities. Clinical cohorts record the former almost universally and the latter almost never, which is why hormone signalling is well annotated as a *clinical* variable and poorly characterised as a *microenvironment* variable.

*Per-method value ranges require sourcing before being recorded.*

## Mechanism

Oestrogen binds ER-alpha, which dimerises, binds oestrogen response elements, and drives transcription of proliferative genes including MYC and CCND1. Non-genomic membrane-initiated signalling also occurs via PI3K/AKT and MAPK.

**Microenvironment relevance beyond proliferation:** oestrogen signalling influences CAF behaviour, ECM composition, and immune infiltration, so it is not purely a tumor-cell-intrinsic factor. Adipocytes in the breast microenvironment are both a hormone source and a stromal cell population.

## Effects

1. **Proliferation** in receptor-positive tumors.
2. **Therapeutic target.** Endocrine therapy (tamoxifen, aromatase inhibitors) works only in receptor-positive disease - the clearest example of microenvironment composition determining treatment.
3. **ECM interaction.** In Byrne et al. 2021, ER-negative and ER-positive breast cancer lines responded differently to identical matrix substrates, with ER-negative cells sensitised to chemotherapy and targeted therapy by matrix composition. Receptor status and matrix composition interact rather than acting independently.
4. **Collagen relationship.** Collagen I content was higher in ER+/PGR+ breast tumors than in triple-negative tumors, independent of age or race - the opposite of the naive expectation.

## Connections

- <-> **Collagen I** - subtype-dependent relationship, direction counterintuitive
- <-> **Adipocytes** - hormone source and stromal population
- <-> **Drug response** - receptor status determines endocrine therapy eligibility
- <-> **BMI / systemic metabolism** - host-level factor feeding into local hormone availability

## Variation across tumor types

Breast, endometrial, ovarian (oestrogen/progesterone); prostate (androgen). Not applicable to most other solid tumors, though insulin/IGF-1 signalling is broadly relevant.

## Indian-specific data

**Present as clinical annotation, absent as microenvironment characterisation.**

| Source | Content |
|---|---|
| ICGA | Cohort is specifically ER+/PR+/HER2- Indian breast cancer, treatment-naive, ages 18-75, with proteomics and follow-up |
| Indian breast transcriptomics (PMC9641000) | 17 tumor / 16 matched normal across six receptor-defined subtypes (ER, EH, EP, EPH, Hmod, TNBC) |

**Key epidemiological point:** Indian breast cancer patients frequently present at younger age than Western cohorts. Younger presentation implies more premenopausal disease, which implies a different hormonal microenvironment - different circulating oestrogen source, different breast density, different subtype distribution. This is a genuine India-specific microenvironment difference and one of the few that is well documented.

**Gap classification:** Receptor status widely recorded clinically. No Indian study characterising hormone levels *as a microenvironment variable* alongside ECM or metabolic factors.

## Confidence

- **General phenomenon:** High. Receptor-driven proliferation and endocrine therapy response are foundational clinical oncology.
- **Specific values:** High for receptor status (standardised assay, clinical cut-offs). Low for local intratumoral hormone concentrations.

## Open questions

- Whether the younger age at presentation in Indian cohorts produces measurably different ECM composition, given the interaction between hormone status and collagen content.
- Whether the ER+/PR+ versus TNBC collagen inversion replicates in Indian cohorts.

**This is arguably the single most tractable India-specific research question identified in this atlas** - ICGA has the cohort, the receptor annotation, and the proteomics to test it.

## Sources

- [x] Primary - Byrne et al. 2021, Tissue Eng Part A 27:500-511, PMID 33797977
- [x] Dataset, Indian - ICGA, biorxiv 2025.03.25.645286
- [x] Primary, Indian - Indian breast transcriptomics, PMC9641000
- [ ] Primary - aromatase activity in breast adipose tissue
- [ ] Epidemiological - age at presentation, Indian vs Western breast cancer cohorts
