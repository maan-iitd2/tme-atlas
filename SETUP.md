# Setup

## Requirements

- Python 3.9+
- git
- A GitHub account

## Install dependencies

```bash
pip install pandas matplotlib numpy
```

## Regenerate the coverage figure

```bash
python scripts/make_heatmap.py
```

Options:

```bash
python scripts/make_heatmap.py --out figures/coverage.png --dpi 300
```

The script reads `data/coverage.csv` and writes to `figures/`. It prints summary
counts (cells with no data, cells with Indian data) which are useful when
presenting.

## Initialise as a git repo and push

Run these from inside the `tme-atlas` folder.

```bash
git init
git add .
git commit -m "Initial commit: schema, 8 factor entries, India inventory, coverage heatmap"
git branch -M main
```

Then create an empty repository on github.com named `tme-atlas` (no README, no
.gitignore — this repo already has both), and connect it:

```bash
git remote add origin https://github.com/YOUR-USERNAME/tme-atlas.git
git push -u origin main
```

Replace `YOUR-USERNAME`. If prompted for a password, GitHub wants a personal
access token rather than your account password — generate one under
Settings > Developer settings > Personal access tokens.

## Adding a new factor entry

1. Copy an existing entry as a template. `factors/chemical/hypoxia-hif1a.md` is
   the most complete.
2. Keep every field from `SCHEMA.md`, in order. Write `None found` rather than
   deleting a field.
3. Add a row to `data/factors.csv`.
4. Add rows to `data/coverage.csv` — one per tumor type.
5. Regenerate the figure.

**Rule:** only mark a coverage cell as anything other than `none` if you have
actually read a source and recorded it in the factor entry. The value of the
figure depends entirely on this.
