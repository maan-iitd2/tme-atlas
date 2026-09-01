# Access-Gated Sources

Sources that could not be retrieved automatically and need manual download, ideally through IIT Delhi institutional access. Compiled September 2026.

---

## Blocked by automated-access restrictions

These are not necessarily paywalled — they block scripted retrieval regardless of subscription status. A normal browser session works fine.

### ScienceDirect / Elsevier — `sciencedirect.com`
**Blocks all automated fetching (robots.txt).** Affects Elsevier journals including iScience, Cell Reports, Matrix Biology, Cancer Letters, Seminars in Cancer Biology.

**Outstanding item:**
- `https://www.sciencedirect.com/science/article/pii/S2589004225027221` — iScience article, one of the five original reference papers. **Never identified.** Could not resolve via PII search either. Needs manual download, or ask the professor for the title.

### PubMed / PMC — `pubmed.ncbi.nlm.nih.gov`, `pmc.ncbi.nlm.nih.gov`
**Intermittent reCAPTCHA challenge.** Content is open access; the barrier is bot detection, not licensing. Direct browser access works.

Affected items needing manual retrieval for full text:
- PMC10123695 — Dzobo & Dandara, Biomimetics 2023;8(2):146
- PMC8349725 — Byrne et al., Tissue Eng Part A 2021
- PMC12181812 — HIF-1α IHC in Northeast Indian OSCC
- PMC9853450 / PMC10161508 — GBC tissue proteomics (both papers) — **supplementary tables are the priority; they should contain per-protein values**
- PMC8163239 — dbGENVOC
- PMC9641000 — Indian breast cancer transcriptomics
- PMC3892388 — Indian cervical cancer expression profiling
- PMC5102491 — Indian cervical cancer exome

*Note: PMC content is open access. Retrieval is a nuisance, not a licensing problem.*

### Cell Press — `cell.com`
Blocks automated access. Relevant for iScience and Cell family journals.

---

## Likely subscription-gated

Full text may require IIT Delhi institutional login.

| Publisher | Domain | Relevant item |
|---|---|---|
| ASCO Publications | ascopubs.org | Indian GBC genomic profiling, DOI 10.1200/GO-25-00332 |
| SAGE | journals.sagepub.com | Bharat Cancer Genome Atlas, DOI 10.1177/15330338251381404 |
| Clinical Breast Cancer (Elsevier) | clinical-breast-cancer.com | Stromal type I collagen prognostic study |
| Nature (some) | nature.com | *Cancer proteomics in India*, Nature India 2015 |
| Lancet Oncology | thelancet.com | GBC GWAS, PMID 28274756 |

---

## Open — no barrier

Retrieved successfully or freely available:

- **SpringerLink** (`link.springer.com`) — Kamal et al. 2026, Molecular Biomedicine 7:38, DOI 10.1186/s43556-026-00436-1. Fetched without issue
- **bioRxiv / medRxiv** — ICGA preprint (2025.03.25.645286), HCG22 salivary lncRNA (2025.07.30.25332447)
- **Research Square** — GLUT1/HIF-1α preprint rs-10569258
- **PLOS ONE** — open access
- **Cureus** — open access, DOI 10.7759/cureus.45189
- **Frontiers / BMC** — open access
- **dbGENVOC** — research.nibmg.ac.in/dbcares/dbgenvoc/

---

## Data repositories to check for accessions

Not gated, but require searching rather than direct fetching:

| Repository | What to look for |
|---|---|
| **PRIDE** (ebi.ac.uk/pride) | Proteomics accessions for both GBC iTRAQ papers. **Highest priority** — these are the closest thing to Indian ECM composition data |
| **NCBI SRA** | PRJNA327548, PRJNA775998, PRJNA947509, PRJNA1031181 (OSCC RNA-seq, reused in the HCG22 study) |
| **GEO** | Indian breast cancer transcriptomics; Indian cervical microarray |
| **ICGA portal** | Requires access request — **start this early, approvals take weeks** |

---

## Retrieval priority

1. **GBC proteomics supplementary tables** (PMC9853450, PMC10161508) — the only Indian ECM composition data identified
2. **The unidentified iScience paper** — ask the professor for the title
3. **ICGA access request** — long lead time, start now
4. **PRIDE accessions** for the GBC proteomics
5. Everything else as needed per factor entry
