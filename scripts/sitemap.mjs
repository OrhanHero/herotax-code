import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const APP = path.join(ROOT, "src/App.jsx");

export const SITE_URL = "https://herotax.de";

/* Rang je Route. Wer hier fehlt, bekommt DEFAULT_RANK — eine neue Seite
   landet also automatisch in der Sitemap, auch ohne Eintrag. */
const RANK = {
  "/": { changefreq: "daily", priority: "1.0" },
  "/news": { changefreq: "daily", priority: "0.9" },
  "/live": { changefreq: "daily", priority: "0.9" },
  "/eu-kompass": { changefreq: "weekly", priority: "0.8" },
  "/ki": { changefreq: "weekly", priority: "0.8" },
  "/tools": { changefreq: "weekly", priority: "0.8" },
  "/publikationen": { changefreq: "weekly", priority: "0.7" },
  "/dsgvo": { changefreq: "monthly", priority: "0.6" },
  "/datenschutz": { changefreq: "monthly", priority: "0.5" },
  "/impressum": { changefreq: "monthly", priority: "0.5" },
};
const DEFAULT_RANK = { changefreq: "weekly", priority: "0.7" };

/** Importierte Projektdateien einer Komponente auflösen (eine Ebene tief).
    Damit zählt für lastmod auch eine geänderte Unterkomponente. */
const localImports = (file) => {
  if (!fs.existsSync(file)) return [];
  const src = fs.readFileSync(file, "utf8");
  const out = [];
  for (const m of src.matchAll(/from\s+"(\.[^"]+)"/g)) {
    const base = path.resolve(path.dirname(file), m[1]);
    for (const cand of [`${base}.jsx`, `${base}.js`, base]) {
      if (fs.existsSync(cand) && fs.statSync(cand).isFile()) {
        out.push(cand);
        break;
      }
    }
  }
  return out;
};

/** Datum des letzten Commits, der eine dieser Dateien berührt hat.
    Fällt auf heute zurück, wenn git nichts liefert — etwa bei einem
    flachen Checkout ohne Historie. */
const lastCommitDate = (files) => {
  const dates = [];
  for (const f of files) {
    try {
      const out = execFileSync("git", ["log", "-1", "--format=%ad", "--date=short", "--", f], {
        cwd: ROOT,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      }).trim();
      if (out) dates.push(out);
    } catch {
      /* kein git verfügbar */
    }
  }
  return dates.length ? dates.sort().at(-1) : new Date().toISOString().slice(0, 10);
};

/** Routen aus dem Router in App.jsx lesen und jeder ihre Dateien zuordnen. */
export const collectRoutes = () => {
  const app = fs.readFileSync(APP, "utf8");

  // Importierte Komponenten: Name -> Datei
  const imports = new Map();
  for (const m of app.matchAll(/import\s+(\w+)\s+from\s+"(\.[^"]+)"/g)) {
    const base = path.resolve(path.dirname(APP), m[2]);
    for (const cand of [`${base}.jsx`, `${base}.js`, base]) {
      if (fs.existsSync(cand) && fs.statSync(cand).isFile()) {
        imports.set(m[1], cand);
        break;
      }
    }
  }

  // Umbenannte Routen gehören nicht in die Sitemap: sie antworten mit 301.
  const redirectBlock = app.match(/ROUTE_REDIRECTS\s*=\s*\{([^}]*)\}/s)?.[1] ?? "";
  const redirects = new Set([...redirectBlock.matchAll(/"(\/[^"]*)":/g)].map((m) => m[1]));

  // switch-Zweige: case "/pfad": ... bis zum nächsten case oder default
  const body = app.match(/switch\s*\(pathname\)\s*\{(.*?)\n\s*\}/s)?.[1] ?? "";
  const routes = [];
  const caseRe = /case\s+"(\/[^"]*)":([\s\S]*?)(?=\n\s*case\s+"|\n\s*default:)/g;
  for (const m of body.matchAll(caseRe)) {
    const route = m[1] === "" ? "/" : m[1];
    if (redirects.has(route)) continue;

    // In diesem Zweig gerenderte Komponenten -> Dateien (plus deren Imports)
    const files = new Set();
    for (const c of m[2].matchAll(/<(\w+)\s*\/?>/g)) {
      const file = imports.get(c[1]);
      if (!file) continue;
      files.add(file);
      localImports(file).forEach((f) => files.add(f));
    }
    routes.push({ route, files: [...files] });
  }

  if (!routes.length) {
    throw new Error(
      "sitemap: keine Routen in src/App.jsx gefunden — Router-Struktur geändert? " +
        "Build abgebrochen, damit keine leere Sitemap ausgeliefert wird."
    );
  }
  return { routes, redirects: [...redirects] };
};

/** Vollständige sitemap.xml als String erzeugen. */
export const buildSitemap = () => {
  const { routes, redirects } = collectRoutes();

  const entries = routes
    .map(({ route, files }) => ({
      loc: SITE_URL + (route === "/" ? "/" : route),
      lastmod: lastCommitDate(files.length ? files : [APP]),
      ...(RANK[route] ?? DEFAULT_RANK),
    }))
    .sort((a, b) => Number(b.priority) - Number(a.priority) || a.loc.localeCompare(b.loc));

  const skipped = redirects.length
    ? `\n  Nicht enthalten (301-Weiterleitungen): ${redirects.join(", ")} —\n  in eine Sitemap gehören nur kanonische Ziele.`
    : "";

  const body = entries
    .map(
      (e) =>
        `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n` +
        `    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
    )
    .join("\n");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<!--\n  Automatisch erzeugt beim Build aus den Routen in src/App.jsx.\n` +
    `  Nicht von Hand bearbeiten — siehe scripts/sitemap.mjs.${skipped}\n-->\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
  );
};

/** Vite-Plugin: legt die Sitemap beim Build in dist/ ab. */
export const sitemapPlugin = () => ({
  name: "herotax-sitemap",
  apply: "build",
  generateBundle() {
    const source = buildSitemap();
    this.emitFile({ type: "asset", fileName: "sitemap.xml", source });
    const count = (source.match(/<url>/g) ?? []).length;
    this.info?.(`sitemap.xml erzeugt (${count} Routen)`);
  },
});

// Direktaufruf: node scripts/sitemap.mjs  -> Sitemap auf stdout
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  process.stdout.write(buildSitemap());
}
