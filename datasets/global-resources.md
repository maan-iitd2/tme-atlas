# Global Data Resources

Non-India-specific resources providing the pan-cancer backbone.

| Resource | Content | Access | Use here |
|---|---|---|---|
| **MatrisomeDB** | ~1,000 matrisome genes, categorised | Free download | Defines the structural factor universe |
| **TCGA / GDC** | ~32 tumor types, RNA-seq, WGS, clinical | Open (some controlled) | Transcript-level composition across tumor types |
| **CPTAC** | Proteomics for a subset of tumor types (breast, colon, ovarian, lung, pancreatic, others) | Open | Ground truth for checking transcript proxies |
| **PRIDE** | Proteomics repository | Open | Where Indian proteomics accessions live |
| **GEO / SRA** | Expression and sequencing data | Open | Individual study datasets |
| **Human Protein Atlas** | Protein expression by tissue, IHC | Open | Cross-check for protein-level presence |

## Note on transcript vs protein

Matrisome genes are expressed predominantly by stromal cells, not tumor cells. Bulk RNA-seq matrisome signal therefore partly measures tumor purity rather than biology. Purity varies by tumor type, by sampling and by institution.

Any transcript-level analysis must adjust for purity (ESTIMATE, ABSOLUTE, or consensus purity calls) or carry it as an explicit covariate. Deconvolution (CIBERSORTx, xCell) is preferable where possible, since it converts the confound into usable CAF and immune fraction features.

This is documented here because it is a schema-level decision, not a modelling afterthought.
