# Train Screw Coupling — FEA Digital Report

React/Vite digital report for **Finite Element Analysis — Train Screw Coupling**, by **Osca Kholopha**, **MECN4045 — Solid Mechanics II**, **University of the Witwatersrand**, **2026**.

## Current scope

Only the cover page is populated. The other 17 chapters are clearly labelled placeholders. The chapter names and order follow the supplied brief and remain provisional until checked against `Assignment_1863498.pptx`. No technical calculations, declarations, figure numbers, conclusions or simulation results have been invented.

The PowerPoint and cover illustration were not supplied. The cover introduction uses only project metadata from the brief; the technical introduction awaits verification. See [SOURCE_VERIFICATION.md](SOURCE_VERIFICATION.md).

## Run locally

Use Node.js 22.12 or newer (Node 22.19 was used here).

```sh
npm install
npm run dev
```

Open the Local URL printed by Vite, normally `http://localhost:5173`.

In Windows PowerShell, if execution policy blocks `npm.ps1`, use `npm.cmd install` and `npm.cmd run dev`. No policy change is necessary.

```sh
npm run build
npm run preview
```

Production output is written to `dist/`. A deployment host must rewrite unknown document paths to `index.html` so React Router chapter links work on refresh. Hosting is not configured or published in this phase.

## Add the cover image

Place your original image at:

```text
public/images/cover/cover-coupling.png
```

It is requested as `/images/cover/cover-coupling.png` in the browser. Until supplied, a labelled placeholder displays the expected path. The image uses contain scaling, so original dimensions remain visible; click it to enlarge. Close the modal with its close button, Escape, or the backdrop.

Chapter image directories are under `public/images/`, matching slugs in `src/data/chapters.js`. Figure numbering and captions must come from the source presentation.

## Structure

```text
src/
  components/   Sidebar, TopNavigation, PageNavigation, EngineeringFigure,
                Equation, ReportTable, SectionHeading, ModelViewer
  data/         Ordered chapter manifest
  hooks/        Native dialog lifecycle and scroll lock
  layouts/      Shared responsive report layout
  pages/        Cover and chapter/404 placeholders
  styles/       Tailwind entry point, design tokens and responsive styles
public/
  images/       One directory per chapter
  models/       Reserved for original CAD exports
```

Shared components:

- `EngineeringFigure`: `src`, `number`, `caption`, `description`, `placeholderTitle`; responsive original image, labelled missing-image fallback and accessible native enlargement dialog.
- `Equation`: `math` (LaTeX), `inline`, `number`, `label`; KaTeX renders fractions, matrices, Greek symbols and units, with MathML accessibility output. Invalid input is marked for manual verification. It never evaluates untrusted HTML or URLs.
- `ReportTable`: `caption`, `columns` (`key`, `label`), `rows`; semantic table with a scrollable wrapper.
- `ModelViewer`: placeholder boundary only, intentionally not mounted on the unapproved CAD chapter. Three.js, React Three Fiber and Drei are installed for the next phase and are excluded from the current production bundle because nothing imports them.

When an original CAD export is supplied, add format-specific loaders inside a lazy-loaded viewer at that boundary. Planned formats are GLB/GLTF, STL and OBJ; STEP needs separate conversion. Rotation, zoom, pan, reset/fit, component selection/visibility, wireframe, camera projection and fullscreen remain future work. No substitute geometry exists.

## Git

The supplied remote is `https://github.com/Osca-K/FEA-Train-Screw-Coupling.git`. No commit or push was made automatically.

After reviewing the cover:

```sh
git add .
git commit -m "Set up FEA report architecture and cover page"
git push -u origin main
```

`node_modules/`, `dist/`, local environment files and temporary QA files are ignored. Commit `package-lock.json` for reproducible dependency installation.
