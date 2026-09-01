# Presentation Notes

For the meeting with Prof. Amit Das, IIT Delhi. Roughly 10 minutes of talking, then questions.

---

## Framing — say this first

> "I spent this phase on scoping and problem definition. Three findings came out of it that I want to check with you before building further."

Do not apologise for not having analysis. Scoping is a real phase. But do not claim analysis that was not run either — everything below is honest about what it is.

---

## Finding 1 — the reference papers do not contain composition data

The five links resolve to four papers (one was duplicated).

- Dzobo & Dandara 2023 — broad ECM review, conceptual
- Kamal et al. 2026 — actually about ECM–epigenetics crosstalk; useful taxonomy
- Byrne et al. 2021 — the only bench study, and the most relevant
- One iScience paper — **could not identify it**, ScienceDirect blocks automated access and the PII does not resolve. *Ask for the title.*

**Point to make:** these are excellent for concepts and for the component taxonomy, but the actual per-tumor-type numbers have to come from TCGA, CPTAC, MatrisomeDB, and primary measurement papers. Confirm that is the intended direction.

**The one substantive result from Byrne worth stating aloud:** collagen I was *higher* in ER+/PGR+ breast tumors than in triple-negative — the opposite of the naive expectation — and matrix composition changed drug sensitivity without changing proliferation. That single finding is the argument for why a composition atlas is worth building at all.

---

## Finding 2 — Indian TME data is strongly asymmetric

Searched systematically across tumor types and factor categories.

| | Status |
|---|---|
| Indian hypoxia data | **Present.** Several HIF-1α IHC studies in OSCC, including one from Northeast India; HIF1 activation in gallbladder proteomics |
| Indian ECM/matrisome data | **Near-absent.** Essentially one gallbladder proteomics study (ICMR-NIP Delhi) |
| Indian pH, lactate, stiffness, IFP | **None found** |

**Implication to state:** if the Indian component matters, the chemical factors are the tractable entry point, not ECM structure. That inverts the original project framing, so it needs his input.

**Second point worth raising:** the Northeast India OSCC study explicitly notes that population is genetically closer to East Asian groups than other Indian regions. "Indian data" is not one category. Regional structure within India may matter.

---

## Finding 3 — the schema, and the pH/chemistry expansion

Show `SCHEMA.md`, then one factor entry — `hypoxia-hif1a.md` is the best one to open because it has real Indian data in it.

Point out the three fields that do the work:
- **Measurement method** — different methods give systematically different numbers
- **Confidence, split into phenomenon vs values** — these routinely differ
- **Indian-specific data, including "None found"** — a documented absence is a result

---

## The figure

Open `figures/coverage-heatmap.png`.

Say: 8 factors × 5 tumor types = 40 cells. **62% empty. 10% have Indian data. The cervical column is entirely blank.**

Then the pitch:

> "No published map of TME evidence coverage exists, and none tracking Indian representation. This turns the missing-data problem into the actual result — it shows exactly which experiments nobody has done."

Two concrete gaps the figure surfaces, both addressable by a biochemical engineering lab:
1. **No Indian tumor stiffness measurement exists at all.** AFM or rheometry on Indian tumor tissue would be genuinely novel.
2. **ICGA has ER+/PR+ Indian breast cancer with proteomics.** That cohort could directly test whether the Byrne collagen-versus-subtype finding replicates in Indian patients — where breast cancer presents at younger age, meaning a different hormonal microenvironment.

---

## Questions to ask

**Blocking:**
1. What is the title of the iScience paper?
2. Who is the downstream user — your lab's modelling or experimental work, or a standalone resource?
3. Which tumor types should I prioritise?

**Scoping:**
4. Izzi et al. 2019 already did pan-cancer matrisome across 32 TCGA tumor types. What is our contribution beyond that? *(My suggestion: the Indian coverage angle and the chemical-factor integration.)*
5. Given Indian ECM data is nearly absent, should Indian cohorts be validation and gap analysis rather than a data source?
6. Is this the right depth per entry?

**Logistics:**
7. Institutional access — ICGA data requests, and paywalled journals. Requests take weeks, worth starting now.
8. Is anyone else on this?

---

## Scope proposal — offer this before being told

> "I'd like to do 10–15 factors across 5–6 tumor types properly, rather than everything shallowly."

Proposing your own limits reads as judgement.

---

## If asked "what's next"

1. Extract matrisome protein values from the gallbladder proteomics supplementary tables — the only Indian ECM composition data that exists
2. Read Izzi 2019 properly
3. Download MatrisomeDB gene list
4. Request ICGA access
5. Add factors: MMPs, LOX, fibronectin, glucose, CAF subtypes, vascular density
6. Expand the grid to 15 × 8

---

## Do not

- Fill any heatmap cell without having read a source. A fabricated cell destroys the credibility of the whole thing.
- Claim the Indian gap analysis is exhaustive — it is one round of systematic searching, not a formal systematic review. Say so.
- Present the unidentified iScience paper as resolved.
