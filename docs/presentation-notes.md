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
- One iScience paper — **could not identify it**, ScienceDirect blocks automated access and the PII does not resolve. Additionally queried against the Crossref API for the iScience ISSN in 2025: zero results. A verified negative, not an unchecked gap. *Ask for the title.*

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

**Implication to state:** if the Indian component matters, the chemical factors are the tractable entry point, not ECM structure. That inverts the original project framing, so it needs their input.

**Qualify this before being asked to.** The grid supports the claim by count but not by rate: Indian evidence is 4:1 chemical, but the grid holds three times as many chemical factors as structural ones, so per opportunity it is 13% chemical against 10% structural. And globally — setting India aside — the structural factors here are *better* covered, 33% coverage index against 10%. The honest statement is narrow: **the Indian ECM gap is the finding, not a general ECM gap.** Saying this yourself reads as command of the data. Being corrected on it does not. See `docs/analysis.md`.

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

Say: 8 factors × 5 tumor types = 40 cells. **78% empty. 12% have Indian data. The cervical column is entirely blank.**

**Lead with the audit, not the number.** The grid was 62% empty until every non-empty cell was checked against the source list of its own factor entry. Six cells were coded as having evidence with no source recorded, and were reset to `none`. That is why the figure reads 78% and not 62%. The method is the credibility: an audit trail exists in `docs/coverage-gap.md`, and any cell is restored the moment a source is read. A number that went *up* under scrutiny is worth more than one that was never scrutinised.

**Second figure, if there is time:** `figures/coverage-by-axis.png` breaks the same data down by factor and by tumor type. Two things stand out — extracellular pH and TGF-β are at zero across every tumor type, and after the audit there is no transcript-level evidence anywhere in the grid, which is the tier that is cheapest to fill from public data.

Then the pitch:

> "No published map of TME evidence coverage exists, and none tracking Indian representation. This turns the missing-data problem into the actual result — it shows exactly which experiments nobody has done."

Two concrete gaps the figure surfaces, both addressable by a biochemical engineering lab:
1. **No Indian tumor stiffness measurement exists at all.** AFM or rheometry on Indian tumor tissue would be genuinely novel.
2. **Cervical cancer is the second most common cancer among Indian women** — 127,526 new cases and 79,906 deaths in 2022, ASIR 17.7 per 100,000, India carrying over 65% of the Southeast Asia burden (PMID 41399754). Zero characterised factors in this atlas. Two Indian cervical datasets are already inventoried, so the transcript-level cells are fillable from existing data without new experiments. **Highest-return target in the grid.**
3. **ICGA has ER+/PR+ Indian breast cancer with proteomics.** That cohort could directly test whether the Byrne collagen-versus-subtype finding replicates in Indian patients — where breast cancer presents at younger age, meaning a different hormonal microenvironment.

---

## Questions to ask

**Blocking:**
1. What is the title of the iScience paper?
2. ~~Who is the downstream user?~~ **Answered: the lab's modelling work.** See the modelling section below.
3. Which tumor types should I prioritise?

**Scoping:**
4. Izzi et al. 2019 already did pan-cancer matrisome across 32 TCGA tumor types. What is our contribution beyond that? *(My suggestion: the Indian coverage angle and the chemical-factor integration.)*
5. Given Indian ECM data is nearly absent, should Indian cohorts be validation and gap analysis rather than a data source?
6. Is this the right depth per entry?

**Logistics:**
7. Institutional access — ICGA data requests, and paywalled journals. Requests take weeks, worth starting now.
8. Is anyone else on this?

---

## Modelling is the confirmed downstream user

This reframes the project and should be said early, not saved for the end.

**The line to use:**

> "Since the target is modelling, the atlas is a parameter source. The question isn't only whether evidence exists for a cell, it's whether there's a number with units that a model can actually take."

**The numbers:**
- **4 of 8 factors are parameter-ready** — pH (6.5–7.0 vs 7.4), oxygen tension (<10 vs 40–60 mmHg), interstitial fluid pressure (10–40 vs ~0 mmHg), stiffness (3.3–5.5 vs 1.0–1.4 kPa).
- **None exceeds medium confidence on its values.** This is the caveat the schema was built to surface, and it is the most useful thing the atlas can tell a modeller.
- Lactate and collagen I have ranges with no read source. TGF-β is qualitative only. Receptor status is categorical and does not enter a continuous model.

**The structural finding worth leading with:**

> "Four of my entries independently say to couple to perfusion or vascular density — hypoxia, pH, lactate and interstitial pressure. Vascular density isn't in the atlas. Those four aren't independent parameters; they're one perfusion field with three readouts, sharing the same 100–200 µm diffusion length scale. So vascular density moves to the top of the expansion list."

**What this does to the Izzi question:**

> "For a modelling target, Izzi and I aren't competing. It's transcript-level across 820 matrisome genes — you can't set a scaffold to a normalised expression value. Its use to me is filling the transcript tier of the grid, which after the audit is the emptiest tier."

**The gap that becomes blocking rather than interesting:**

> "If we want an Indian-relevant tumor model, it can't currently be parameterised. There is no stiffness measurement of Indian tumor tissue anywhere. That's not a hole in a review, it's a hard stop — and it's addressable with AFM or rheometry."

## Scope proposal — offer this before being told

> "I'd like to do 10–15 factors across 5–6 tumor types properly, rather than everything shallowly."

Proposing your own limits reads as judgement.

---

## If asked "what's next"

1. Extract matrisome protein values from the gallbladder proteomics supplementary tables — the only Indian ECM composition data that exists
2. Read Izzi 2019 properly
3. Download MatrisomeDB gene list
4. Request ICGA access
5. Add factors, reordered by parameter value to a model: **vascular density first** (the coupling term four entries already need), then glucose depletion (settable in mM), fibronectin (settable as composite-matrix concentration), MMP2/9 and LOX (remodelling dynamics), CAF subtypes (co-culture design)
6. Expand the grid to 15 × 8

---

## Do not

- Fill any heatmap cell without having read a source. A fabricated cell destroys the credibility of the whole thing.
- Claim the Indian gap analysis is exhaustive — it is one round of systematic searching, not a formal systematic review. Say so.
- Present the unidentified iScience paper as resolved.
