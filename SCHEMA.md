# Entry Schema

Every factor entry uses these fields, in this order. Fields are never dropped — if there is nothing to record, write `None found` or `Not established`. An empty field and an absent field mean different things, and only one of them is a finding.

---

## Required fields

### `Factor name`
Common name, with abbreviation. Where a gene or protein is involved, give the HGNC symbol and UniProt ID.

### `Category`
`Structural` or `Chemical / soluble`.

### `Subcategory`
Structural: `Collagen` | `Glycoprotein` | `Proteoglycan` | `Remodelling enzyme` | `Mechanical property`
Chemical: `Metabolic` | `Gas / oxygen` | `Metabolite` | `Growth factor / cytokine` | `Hormone` | `Physical-chemical`

### `Short definition`
Two to three sentences, plain language. Assume the reader knows biology but not this subfield.

### `Measured as`
The quantity and its units. If the factor is usually reported as a relative change rather than an absolute value, say so explicitly.

### `Value in normal tissue`
With tissue type. Physiological values are tissue-specific — normal breast and normal brain are not interchangeable.

### `Value in tumor tissue`
With tumor type and, where available, subtype and stage.

### `Measurement method`
List every method in common use. This field matters more than it looks: different methods give systematically different numbers for the same factor, and mixing them without labelling produces false variation.

### `Mechanism`
Why the factor changes in tumors. The causal chain, not just the correlation.

### `Effects`
What downstream consequences follow. Numbered list. Separate well-established effects from proposed ones.

### `Connections`
Cross-references to other entries, with the nature of the link (causal, correlated, confounded). Written as `↔ [factor name] — relationship`.

### `Variation across tumor types`
Which cancers sit at the high and low end, and why. Leave blank rather than guess.

### `Indian-specific data`
Cohorts, studies, or datasets from Indian patient populations. Record `None found` explicitly, with the date searched. A documented absence is a result.

### `Confidence`
`High` | `Medium` | `Low`, stated separately for (a) the general phenomenon and (b) the specific numeric values. These frequently differ — a phenomenon can be beyond dispute while its quantification remains method-dependent and variable.

### `Sources`
Full citation plus DOI. Mark each as `[primary]` (original measurement) or `[review]` (secondary). Prefer primary sources for any number.

---

## Optional fields

### `Modelling notes`
If the factor is to feed a computational or experimental model: typical parameter range, units expected, known instabilities or edge cases.

### `Open questions`
Contested points, contradictory findings, or things nobody has measured.

---

## Conventions

- **Numbers carry units and a source.** No exceptions.
- **Ranges, not point values**, unless a single measurement is genuinely all that exists — in which case say so.
- **Transcript-level and protein-level evidence are labelled distinctly.** RNA expression is a proxy for protein abundance, and often a poor one, particularly for secreted and matrix proteins.
- **Where a value is borrowed from a different tumor type or a different population**, mark it as borrowed. Do not silently generalise.

---

## Machine-readable mirror

`data/factors.csv` carries the same entries in tabular form, one row per factor. The markdown files are the authoritative version; the CSV is generated from them and is what a downstream modelling or analysis pipeline would consume.
