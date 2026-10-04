# SLTSC Academy — website demo

Static, dependency-free demo site for SLTSC Academy, plus the planning vault (`00 Home.md`, `01 Research` … `05 Build`).

## Layout

| Path | What it is |
|---|---|
| `src/data/*.json` | All content: programmes, schools, faculty, founder, articles, events… |
| `src/pages/*.js` | One template function per page (home, about, learn, more) |
| `src/lib.js` | Shared helpers + components (header, footer, cards, banners, icons) |
| `src/css/site.css`, `src/js/site.js` | The only stylesheet and script |
| `src/build.js` | Generates every page into `demo-v2/` |
| `src/verify.js` | Checks the generated site (titles, one `<h1>`, alt text, links, icons) |
| `demo-v2/` | **Generated output.** Do not edit by hand. |
| `demo-v1/` | The first, rejected demo (kept for reference) |

## Commands

```sh
node src/build.js    # regenerate demo-v2/ (32 pages)
node src/verify.js   # static checks on demo-v2/
```

Open `demo-v2/index.html` in a browser (or serve the repo root; `index.html` redirects to the demo).

## Content rules

- Anything not confirmed by the client carries a **Demo info — to be confirmed** tag (`demo()` helper in `src/lib.js`).
- Confirmed facts: founder bio and credentials, CCNA 200-301 v2 (3 modules, 8 months, LKR 31,500, instalments, next batch unannounced).
- No backend: forms are local-only and send nothing.
