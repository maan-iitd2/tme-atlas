const PptxGenJS = require("pptxgenjs");
const path = require("path");

const REPO = "C:/VOLUME_D/BTP";
const OUT = "C:/VOLUME_D/BTP/docs/tme-atlas-presentation.pptx";

// ---- design tokens -------------------------------------------------------
const INK      = "1C1614";
const INK_SOFT = "3A302C";
const PAPER    = "FBF9F7";
const WHITE    = "FFFFFF";
const CARMINE  = "B2182B";
const SALMON   = "F4A582";
const PALE     = "FDE5C8";
const EMPTY    = "E6DFDA";
const EMPTY_D  = "2E2624";
const MUTED    = "6E635E";  // on light: 5.4:1
const GOLD     = "8A6D1F";  // on light: 5.3:1  (was C9A227 at 2.4:1)
const DIM      = "B3A8A2";  // small text on dark: 6.6:1
const DIM_2    = "8E837E";  // large text on dark only

const H = "Georgia";
const B = "Calibri";
const M = "Consolas";

const W = 13.333, HT = 7.5;
const ML = 0.85;
const CW = W - ML * 2;

// shared vertical grid, so headers do not wobble between slides
const Y_EYEBROW = 0.42;
const Y_TITLE   = 0.64;
const Y_SUB     = 1.48;

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_WIDE";  // 13.333 x 7.5 in
pptx.author = "maan-iitd2";
pptx.title = "TME Atlas";

// audited coverage grid: rows = factors, cols = Breast, Oral, GB, Cervical, Panc
const GRID = [
  ["n","n","n","n","n"],  // pH
  ["n","d","i","n","n"],  // hypoxia
  ["n","i","n","n","n"],  // lactate
  ["n","n","n","n","n"],  // TGF-beta
  ["d","n","n","n","n"],  // oestrogen
  ["n","n","n","n","i"],  // IFP
  ["d","n","i","n","n"],  // collagen I
  ["d","n","n","n","d"],  // stiffness
];
const EVC_DARK = { n: EMPTY_D, i: PALE, t: SALMON, d: CARMINE };

function miniGrid(s, x, y, cell, gap) {
  GRID.forEach((row, r) =>
    row.forEach((v, c) =>
      s.addShape(pptx.ShapeType.rect, {
        x: x + c * (cell + gap), y: y + r * (cell + gap),
        w: cell, h: cell,
        fill: { color: EVC_DARK[v] }, line: { type: "none" },
      })
    )
  );
}

function heading(s, text, sub, size) {
  s.addText(text, {
    x: ML, y: Y_TITLE, w: CW, h: 0.78,
    fontFace: H, fontSize: size || 34, bold: true, color: INK,
    valign: "top", margin: 0,
  });
  if (sub) {
    s.addText(sub, {
      x: ML, y: Y_SUB, w: CW, h: 0.36,
      fontFace: B, fontSize: 14.5, color: MUTED, margin: 0,
    });
  }
}

function eyebrow(s, text, color) {
  s.addText(text.toUpperCase(), {
    x: ML, y: Y_EYEBROW, w: CW, h: 0.26,
    fontFace: M, fontSize: 10.5, color: color || CARMINE,
    charSpacing: 2.2, margin: 0,
  });
}

// ==========================================================================
// 1 — title
// ==========================================================================
let s = pptx.addSlide();
s.background = { color: INK };

s.addText("TME ATLAS", {
  x: ML, y: 2.02, w: 7.4, h: 1.15,
  fontFace: H, fontSize: 58, bold: true, color: WHITE, charSpacing: 1, margin: 0,
});
s.addText("An evidence coverage map of the tumor microenvironment,\nwith Indian cohort representation tracked explicitly", {
  x: ML, y: 3.26, w: 7.0, h: 0.95,
  fontFace: B, fontSize: 17, color: DIM, lineSpacing: 26, margin: 0,
});
s.addShape(pptx.ShapeType.rect, {
  x: ML, y: 4.48, w: 1.5, h: 0.035, fill: { color: CARMINE }, line: { type: "none" },
});
s.addText("Scoping phase review  ·  September 2026", {
  x: ML, y: 4.76, w: 7.0, h: 0.3, fontFace: M, fontSize: 12, color: DIM, margin: 0,
});
s.addText("Prepared for Prof. Amit Das  ·  Biotechnology & Biochemical Engineering, IIT Delhi", {
  x: ML, y: 5.12, w: 7.6, h: 0.3, fontFace: B, fontSize: 13, color: DIM, margin: 0,
});

// hero: the real grid, mostly empty
miniGrid(s, 8.95, 2.02, 0.42, 0.075);
s.addText("8 factors × 5 tumor types\n78% of cells have no data", {
  x: 8.95, y: 6.06, w: 3.6, h: 0.62,
  fontFace: M, fontSize: 10.5, color: DIM, lineSpacing: 16, margin: 0,
});

// ==========================================================================
// 2 — what the TME is
// ==========================================================================
s = pptx.addSlide();
s.background = { color: PAPER };
eyebrow(s, "Background");
heading(s, "Everything in a tumor that is not a cancer cell",
  "Two categories, measured by completely different instruments — and they are not independent.");

const catY = 2.42, catH = 3.3, catW = 5.55;

function categoryCard(x, bar, label, labelCol, title, body, methods) {
  s.addShape(pptx.ShapeType.rect, { x, y: catY, w: catW, h: catH, fill: { color: WHITE }, line: { color: EMPTY, width: 1 } });
  s.addShape(pptx.ShapeType.rect, { x, y: catY, w: catW, h: 0.09, fill: { color: bar }, line: { type: "none" } });
  s.addText(label, { x: x + 0.42, y: catY + 0.4, w: catW - 0.84, h: 0.34, fontFace: M, fontSize: 11.5, color: labelCol, charSpacing: 2, margin: 0 });
  s.addText(title, { x: x + 0.42, y: catY + 0.74, w: catW - 0.84, h: 0.42, fontFace: H, fontSize: 22, bold: true, color: INK, margin: 0 });
  s.addText(body, { x: x + 0.42, y: catY + 1.3, w: catW - 0.84, h: 1.1, fontFace: B, fontSize: 14, color: INK_SOFT, lineSpacing: 22, margin: 0 });
  s.addText(methods, { x: x + 0.42, y: catY + 2.56, w: catW - 0.84, h: 0.36, fontFace: M, fontSize: 10.5, color: MUTED, margin: 0 });
}
categoryCard(ML, CARMINE, "STRUCTURAL", CARMINE, "The physical scaffold",
  "Collagens · fibronectin · laminins · proteoglycans\nMMPs, LOX and other remodelling enzymes\nBulk stiffness · fibre alignment · pore size",
  "Measured by  AFM · rheometry · picrosirius · mass spec");
categoryCard(ML + catW + 0.45, "C25A3A", "CHEMICAL / SOLUBLE", "9C4A2F", "The fluid filling it",
  "Extracellular pH · oxygen tension\nLactate, glucose and other metabolites\nTGF-β, VEGF, IL-6 · hormones · fluid pressure",
  "Measured by  microelectrode · CEST-MRI · IHC · ELISA");

s.addText("The two are coupled: the matrix sequesters growth factors and releases them on degradation, while acidity activates the enzymes that degrade it.", {
  x: ML, y: 6.02, w: CW - 0.9, h: 0.4, fontFace: B, fontSize: 13.5, italic: true, color: MUTED, margin: 0 });

// ==========================================================================
// 3 — what this phase was
// ==========================================================================
s = pptx.addSlide();
s.background = { color: PAPER };
eyebrow(s, "Framing");
heading(s, "This phase was scoping, not analysis",
  "Three findings came out of it that I want to check with you before building further.");

const items = [
  ["01", "The reference papers do not contain composition data", "Four papers, not five — one link was duplicated. Concepts and taxonomy, no per-tumor-type numbers."],
  ["02", "Indian TME data is strongly asymmetric", "Hypoxia in oral cancer is covered. ECM characterisation is close to absent."],
  ["03", "Coverage can be audited — and auditing changes the answer", "Six cells failed the source check. Empty cells went from 62% to 78%."],
];
let iy = 2.46;
items.forEach(([n, t, d]) => {
  s.addShape(pptx.ShapeType.rect, { x: ML, y: iy, w: CW, h: 1.12, fill: { color: WHITE }, line: { color: EMPTY, width: 1 } });
  s.addText(n, { x: ML + 0.36, y: iy + 0.34, w: 0.7, h: 0.5, fontFace: M, fontSize: 20, bold: true, color: CARMINE, margin: 0 });
  s.addText(t, { x: ML + 1.24, y: iy + 0.26, w: CW - 1.7, h: 0.42, fontFace: H, fontSize: 19, bold: true, color: INK, margin: 0 });
  s.addText(d, { x: ML + 1.24, y: iy + 0.7, w: CW - 1.7, h: 0.34, fontFace: B, fontSize: 13.5, color: MUTED, margin: 0 });
  iy += 1.42;
});

// ==========================================================================
// 4 — finding 1
// ==========================================================================
s = pptx.addSlide();
s.background = { color: PAPER };
eyebrow(s, "Finding 01");
heading(s, "The starting papers are concepts, not numbers",
  "The five supplied links resolve to four papers. One was duplicated.");

const papers = [
  ["Dzobo & Dandara 2023", "Broad ECM review", "No data", MUTED],
  ["Kamal et al. 2026", "ECM–epigenetics crosstalk", "No data", MUTED],
  ["Byrne et al. 2021", "The only bench study", "Has data", CARMINE],
  ["iScience, unidentified", "PII does not resolve", "Unknown", GOLD],
];
let px = ML;
const pw = (CW - 0.45 * 3) / 4;
papers.forEach(([t, d, tag, col]) => {
  s.addShape(pptx.ShapeType.rect, { x: px, y: 2.42, w: pw, h: 2.0, fill: { color: WHITE }, line: { color: EMPTY, width: 1 } });
  s.addShape(pptx.ShapeType.rect, { x: px, y: 2.42, w: pw, h: 0.08, fill: { color: col }, line: { type: "none" } });
  s.addText(t, { x: px + 0.28, y: 2.66, w: pw - 0.56, h: 0.72, fontFace: H, fontSize: 15.5, bold: true, color: INK, margin: 0 });
  s.addText(d, { x: px + 0.28, y: 3.38, w: pw - 0.56, h: 0.5, fontFace: B, fontSize: 12.5, color: MUTED, margin: 0 });
  s.addText(tag.toUpperCase(), { x: px + 0.28, y: 3.98, w: pw - 0.56, h: 0.3, fontFace: M, fontSize: 10, color: col, charSpacing: 1.4, margin: 0 });
  px += pw + 0.45;
});

s.addShape(pptx.ShapeType.rect, { x: ML, y: 4.76, w: CW, h: 1.6, fill: { color: INK }, line: { type: "none" } });
s.addText("The one substantive result worth stating aloud", {
  x: ML + 0.42, y: 4.98, w: CW - 0.84, h: 0.34, fontFace: M, fontSize: 10.5, color: SALMON, charSpacing: 1.6, margin: 0 });
s.addText("Collagen I was higher in ER+/PGR+ breast tumors than in triple-negative — the opposite of the naive expectation. Matrix composition changed drug sensitivity without changing proliferation.", {
  x: ML + 0.42, y: 5.34, w: CW - 0.84, h: 0.86, fontFace: B, fontSize: 15, color: "E8E0DC", lineSpacing: 23, margin: 0 });

s.addText("Per-tumor-type numbers have to come from TCGA, CPTAC, MatrisomeDB and primary measurement papers. Confirm that is the intended direction.", {
  x: ML, y: 6.48, w: CW - 0.9, h: 0.34, fontFace: B, fontSize: 13, italic: true, color: MUTED, margin: 0 });

// ==========================================================================
// 5 — finding 2
// ==========================================================================
s = pptx.addSlide();
s.background = { color: PAPER };
eyebrow(s, "Finding 02");
heading(s, "Indian TME data is strongly asymmetric",
  "Systematic search across tumor types and factor categories, September 2026.");

const rows = [
  ["Hypoxia / HIF-1α", "Present", "Several OSCC IHC studies, incl. Northeast India; HIF1 in gallbladder proteomics", CARMINE],
  ["ECM / matrisome", "Near-absent", "Essentially one gallbladder proteomics study (ICMR-NIP Delhi)", GOLD],
  ["pH · lactate · stiffness · IFP", "None found", "No Indian measurement study identified for any of the four", MUTED],
];
let ry = 2.32;
rows.forEach(([f, st, d, col]) => {
  s.addShape(pptx.ShapeType.rect, { x: ML, y: ry, w: CW, h: 0.98, fill: { color: WHITE }, line: { color: EMPTY, width: 1 } });
  s.addShape(pptx.ShapeType.rect, { x: ML, y: ry, w: 0.075, h: 0.98, fill: { color: col }, line: { type: "none" } });
  s.addText(f, { x: ML + 0.42, y: ry + 0.28, w: 3.5, h: 0.42, fontFace: H, fontSize: 17, bold: true, color: INK, margin: 0 });
  s.addText(st.toUpperCase(), { x: ML + 4.05, y: ry + 0.32, w: 1.8, h: 0.34, fontFace: M, fontSize: 11, bold: true, color: col, charSpacing: 1.2, margin: 0 });
  s.addText(d, { x: ML + 6.05, y: ry + 0.3, w: CW - 6.5, h: 0.42, fontFace: B, fontSize: 13, color: MUTED, margin: 0 });
  ry += 1.18;
});

s.addShape(pptx.ShapeType.rect, { x: ML, y: 5.96, w: CW, h: 0.94, fill: { color: "F5EBEB" }, line: { color: "E3CCCC", width: 1 } });
s.addText("“Indian data” is not one category.", {
  x: ML + 0.42, y: 6.12, w: CW - 0.84, h: 0.34, fontFace: H, fontSize: 16, bold: true, color: CARMINE, margin: 0 });
s.addText("The Northeast India OSCC study notes that population is genetically closer to East Asian groups than to other Indian regions. Regional structure within India may matter.", {
  x: ML + 0.42, y: 6.48, w: CW - 1.3, h: 0.34, fontFace: B, fontSize: 13, color: INK_SOFT, margin: 0 });

// ==========================================================================
// 6 — finding 3, the audit
// ==========================================================================
s = pptx.addSlide();
s.background = { color: INK };
s.addText("FINDING 03", { x: ML, y: Y_EYEBROW, w: CW, h: 0.26, fontFace: M, fontSize: 10.5, color: SALMON, charSpacing: 2.2, margin: 0 });
s.addText("The grid got emptier under scrutiny", {
  x: ML, y: Y_TITLE, w: 9.4, h: 0.78, fontFace: H, fontSize: 34, bold: true, color: WHITE, valign: "top", margin: 0 });
s.addText("Every non-empty cell was checked against the source list of its own factor entry.", {
  x: ML, y: Y_SUB, w: 9.4, h: 0.36, fontFace: B, fontSize: 14.5, color: DIM, margin: 0 });

s.addText("62%", { x: ML, y: 2.5, w: 1.95, h: 1.05, fontFace: H, fontSize: 58, bold: true, color: DIM_2, valign: "top", margin: 0 });
s.addText("before audit", { x: ML, y: 3.58, w: 1.95, h: 0.3, fontFace: M, fontSize: 11, color: DIM_2, margin: 0 });

s.addText("→", { x: ML + 2.05, y: 2.68, w: 0.7, h: 0.7, fontFace: B, fontSize: 34, color: CARMINE, align: "center", margin: 0 });

s.addText("78%", { x: ML + 2.85, y: 2.5, w: 1.95, h: 1.05, fontFace: H, fontSize: 58, bold: true, color: WHITE, valign: "top", margin: 0 });
s.addText("of cells have no data", { x: ML + 2.85, y: 3.58, w: 2.9, h: 0.3, fontFace: M, fontSize: 11, color: SALMON, margin: 0 });

s.addShape(pptx.ShapeType.rect, { x: ML, y: 4.24, w: 6.3, h: 0.02, fill: { color: "3A302C" }, line: { type: "none" } });
s.addText("Six cells were coded as having evidence with no source recorded in the entry. They were reset to none. One cell had an Indian source recorded but was not flagged; corrected.", {
  x: ML, y: 4.46, w: 6.3, h: 0.9, fontFace: B, fontSize: 14, color: DIM, lineSpacing: 22, margin: 0 });
s.addText("A number that went up under scrutiny is worth more than one that was never scrutinised.", {
  x: ML, y: 5.54, w: 6.3, h: 0.66, fontFace: H, fontSize: 16, italic: true, color: SALMON, margin: 0 });

s.addShape(pptx.ShapeType.rect, { x: 8.15, y: 2.5, w: 4.35, h: 3.2, fill: { color: "241D1B" }, line: { color: "3A302C", width: 1 } });
s.addText("THE RULE", { x: 8.55, y: 2.78, w: 3.55, h: 0.3, fontFace: M, fontSize: 10.5, color: SALMON, charSpacing: 1.8, margin: 0 });
s.addText("A cell may only be coded above “none” if a source has been read and recorded in that factor entry.", {
  x: 8.55, y: 3.14, w: 3.55, h: 1.0, fontFace: B, fontSize: 14.5, color: WHITE, lineSpacing: 22, margin: 0 });
s.addText("Not deletions. Each cell is restored the moment a source is read and added. The audit trail is in the repository, cell by cell, with reasons.", {
  x: 8.55, y: 4.24, w: 3.55, h: 1.1, fontFace: B, fontSize: 12.5, color: DIM, lineSpacing: 19, margin: 0 });

// ==========================================================================
// 7 — the figure
// ==========================================================================
s = pptx.addSlide();
s.background = { color: PAPER };
eyebrow(s, "The map");
heading(s, "No published map of this kind exists",
  "No TME evidence coverage map is published, and none tracking Indian representation.");

s.addImage({ path: path.join(REPO, "figures/coverage-heatmap.png"), x: ML, y: 1.96, w: 7.4, h: 5.07 });

const stats = [["78%", "of cells empty", CARMINE], ["12%", "have Indian data", INK], ["0", "cells for cervical", CARMINE]];
let sy = 2.16;
stats.forEach(([n, l, col]) => {
  s.addText(n, { x: 8.75, y: sy, w: 3.7, h: 0.66, fontFace: H, fontSize: 40, bold: true, color: col, valign: "top", margin: 0 });
  s.addText(l, { x: 8.75, y: sy + 0.7, w: 3.7, h: 0.3, fontFace: M, fontSize: 11.5, color: MUTED, margin: 0 });
  sy += 1.34;
});
s.addShape(pptx.ShapeType.rect, { x: 8.75, y: 6.12, w: 3.7, h: 0.02, fill: { color: EMPTY }, line: { type: "none" } });
s.addText("The missing data is itself the result.", {
  x: 8.75, y: 6.28, w: 3.7, h: 0.56, fontFace: B, fontSize: 13, italic: true, color: INK_SOFT, lineSpacing: 19, margin: 0 });

// ==========================================================================
// 8 — where the coverage sits
// ==========================================================================
s = pptx.addSlide();
s.background = { color: PAPER };
eyebrow(s, "Derived analysis");
heading(s, "Two factors are at zero everywhere",
  "Same grid, broken down by factor and by tumor type.");

s.addImage({ path: path.join(REPO, "figures/coverage-by-axis.png"), x: ML, y: 1.9, w: 5.9, h: 5.05 });

const notes = [
  ["Extracellular pH and TGF-β", "No sourced evidence in any tumor type. Both have large literatures — the gap is reading, not biology."],
  ["No transcript-level evidence survives", "Every remaining cell is direct or inferred. The tier cheapest to fill from public data is the emptiest."],
  ["Coverage index: 16%", "Scoring cells 0–3 by evidence strength, the grid holds one sixth of what full characterisation would give."],
];
let ny = 1.92;
notes.forEach(([t, d]) => {
  s.addShape(pptx.ShapeType.rect, { x: 7.25, y: ny, w: 5.25, h: 1.44, fill: { color: WHITE }, line: { color: EMPTY, width: 1 } });
  s.addShape(pptx.ShapeType.rect, { x: 7.25, y: ny, w: 0.07, h: 1.44, fill: { color: CARMINE }, line: { type: "none" } });
  s.addText(t, { x: 7.6, y: ny + 0.24, w: 4.7, h: 0.4, fontFace: H, fontSize: 16, bold: true, color: INK, margin: 0 });
  s.addText(d, { x: 7.6, y: ny + 0.66, w: 4.7, h: 0.66, fontFace: B, fontSize: 12.5, color: MUTED, lineSpacing: 18, margin: 0 });
  ny += 1.74;
});

// ==========================================================================
// 9 — cervical gap
// ==========================================================================
s = pptx.addSlide();
s.background = { color: PAPER };
eyebrow(s, "The largest mismatch");
heading(s, "Highest burden, zero coverage",
  "Cervical cancer is the second most common cancer among Indian women — and has no characterised factor in this atlas.");

const big = [
  ["127,526", "new cases in India, 2022"],
  ["79,906", "deaths"],
  ["17.7", "per 100,000, age-standardised"],
  ["0 of 8", "factors characterised here"],
];
let bx = ML;
const bw = (CW - 0.4 * 3) / 4;
big.forEach(([n, l], idx) => {
  const last = idx === 3;
  s.addShape(pptx.ShapeType.rect, { x: bx, y: 2.42, w: bw, h: 1.72, fill: { color: last ? INK : WHITE }, line: { color: last ? INK : EMPTY, width: 1 } });
  s.addText(n, { x: bx + 0.26, y: 2.66, w: bw - 0.52, h: 0.66, fontFace: H, fontSize: 30, bold: true, color: last ? SALMON : CARMINE, valign: "top", margin: 0 });
  s.addText(l, { x: bx + 0.26, y: 3.42, w: bw - 0.52, h: 0.56, fontFace: B, fontSize: 12, color: last ? DIM : MUTED, lineSpacing: 17, margin: 0 });
  bx += bw + 0.4;
});
s.addText("Singh, Grover & Dhanasekaran 2025, Global Epidemiology 10:100233, PMID 41399754  ·  GLOBOCAN 2022 derived", {
  x: ML, y: 4.32, w: CW, h: 0.3, fontFace: M, fontSize: 10, color: MUTED, margin: 0 });

s.addShape(pptx.ShapeType.rect, { x: ML, y: 4.94, w: CW, h: 1.72, fill: { color: WHITE }, line: { color: EMPTY, width: 1 } });
s.addShape(pptx.ShapeType.rect, { x: ML, y: 4.94, w: CW, h: 0.08, fill: { color: CARMINE }, line: { type: "none" } });
s.addText("And it is the cheapest column to fill", {
  x: ML + 0.42, y: 5.2, w: CW - 0.84, h: 0.4, fontFace: H, fontSize: 20, bold: true, color: INK, margin: 0 });
s.addText("Two Indian cervical datasets are already inventoried — stage-wise expression profiling with documented purity screening (PMC3892388) and whole-exome sequencing from ACTREC/Tata Memorial (PMC5102491). The transcript-level cells in this column are fillable from existing data, without new experiments.", {
  x: ML + 0.42, y: 5.62, w: CW - 0.9, h: 0.86, fontFace: B, fontSize: 14, color: INK_SOFT, lineSpacing: 22, margin: 0 });

// ==========================================================================
// 10 — two experiments
// ==========================================================================
s = pptx.addSlide();
s.background = { color: PAPER };
eyebrow(s, "Next steps");
heading(s, "Two experiments a lab could run now",
  "Both surfaced by the coverage gap, and both within reach of a biochemical engineering lab.");

const exps = [
  ["01", "Measure stiffness on Indian tumor tissue",
   "No AFM, rheometry or elastography characterisation of Indian tumor tissue exists — anywhere, for any cancer type. This is not a gap in the atlas; it is a gap in the literature.",
   "Standard biomaterials-lab equipment. Genuinely novel data rather than a literature fill."],
  ["02", "Test the Byrne finding in an Indian cohort",
   "Byrne et al. found collagen I higher in ER+/PGR+ than triple-negative breast tumors. ICGA holds an ER+/PR+ Indian cohort with proteomics.",
   "Indian breast cancer presents at younger age — a different hormonal microenvironment. Whether the finding replicates is a well-posed question."],
];
let ex = ML;
const ew = (CW - 0.5) / 2;
exps.forEach(([n, t, d, why]) => {
  s.addShape(pptx.ShapeType.rect, { x: ex, y: 2.42, w: ew, h: 3.76, fill: { color: WHITE }, line: { color: EMPTY, width: 1 } });
  s.addShape(pptx.ShapeType.rect, { x: ex, y: 2.42, w: ew, h: 0.09, fill: { color: CARMINE }, line: { type: "none" } });
  s.addText(n, { x: ex + 0.4, y: 2.7, w: 0.8, h: 0.4, fontFace: M, fontSize: 18, bold: true, color: CARMINE, margin: 0 });
  s.addText(t, { x: ex + 0.4, y: 3.14, w: ew - 0.8, h: 0.8, fontFace: H, fontSize: 20, bold: true, color: INK, margin: 0 });
  s.addText(d, { x: ex + 0.4, y: 4.0, w: ew - 0.8, h: 1.06, fontFace: B, fontSize: 13.5, color: INK_SOFT, lineSpacing: 21, margin: 0 });
  s.addShape(pptx.ShapeType.rect, { x: ex + 0.4, y: 5.14, w: ew - 0.8, h: 0.015, fill: { color: EMPTY }, line: { type: "none" } });
  s.addText(why, { x: ex + 0.4, y: 5.28, w: ew - 0.8, h: 0.74, fontFace: B, fontSize: 12.5, italic: true, color: MUTED, lineSpacing: 18, margin: 0 });
  ex += ew + 0.5;
});
s.addText("Scope proposal: 15 factors across 8 tumor types, written to full schema depth — rather than everything shallowly.", {
  x: ML, y: 6.4, w: CW - 0.9, h: 0.34, fontFace: B, fontSize: 13.5, italic: true, color: MUTED, margin: 0 });

// ==========================================================================
// 11 — questions
// ==========================================================================
s = pptx.addSlide();
s.background = { color: INK };
s.addText("WHAT I NEED FROM YOU", { x: ML, y: Y_EYEBROW, w: CW, h: 0.26, fontFace: M, fontSize: 10.5, color: SALMON, charSpacing: 2.2, margin: 0 });
s.addText("Questions", { x: ML, y: Y_TITLE, w: CW, h: 0.86, fontFace: H, fontSize: 38, bold: true, color: WHITE, valign: "top", margin: 0 });

const qs = [
  ["Blocking", [
    "What is the title of the iScience paper? The PII does not resolve through search or Crossref.",
    "Who is the downstream user — your lab’s modelling and experimental work, or a standalone resource?",
    "Which tumor types should I prioritise?",
  ], "E9647A"],
  ["Scoping", [
    "Izzi et al. 2019 did pan-cancer matrisome across 32 TCGA tumor types. What is our contribution beyond it?",
    "Given Indian ECM data is nearly absent, should Indian cohorts be validation and gap analysis rather than a data source?",
    "Is this the right depth per entry?",
  ], SALMON],
];
let qy = 1.94;
qs.forEach(([label, list, col]) => {
  s.addText(label.toUpperCase(), { x: ML, y: qy, w: 2.0, h: 0.32, fontFace: M, fontSize: 11, color: col, charSpacing: 1.6, margin: 0 });
  let ly = qy + 0.42;
  list.forEach((q) => {
    s.addShape(pptx.ShapeType.rect, { x: ML, y: ly + 0.13, w: 0.16, h: 0.045, fill: { color: col }, line: { type: "none" } });
    s.addText(q, { x: ML + 0.42, y: ly - 0.03, w: 11.1, h: 0.44, fontFace: B, fontSize: 14.5, color: "E0D8D4", margin: 0 });
    ly += 0.52;
  });
  qy = ly + 0.36;
});

s.addShape(pptx.ShapeType.rect, { x: ML, y: 6.2, w: CW, h: 0.015, fill: { color: "3A302C" }, line: { type: "none" } });
s.addText("Logistics: institutional access for ICGA data requests and paywalled journals. Requests take weeks.", {
  x: ML, y: 6.38, w: 8.6, h: 0.4, fontFace: B, fontSize: 13, color: DIM, margin: 0 });
s.addText("github.com/maan-iitd2/tme-atlas", {
  x: W - ML - 3.6, y: 6.84, w: 3.6, h: 0.28, fontFace: M, fontSize: 11, color: DIM, align: "right", margin: 0 });

pptx.writeFile({ fileName: OUT }).then(() => console.log("Wrote " + OUT));
