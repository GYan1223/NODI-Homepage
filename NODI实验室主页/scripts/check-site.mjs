import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];
const requiredFiles = ["index.html", "styles.css", "script.js", ".nojekyll"];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) errors.push(`Missing required file: ${file}`);
}

const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const html = read("index.html");
const css = read("styles.css");
const js = read("script.js");
const references = new Set();

function addReference(rawValue) {
  const value = rawValue.trim();
  if (
    !value ||
    value.startsWith("#") ||
    value.startsWith("data:") ||
    value.startsWith("mailto:") ||
    value.startsWith("tel:") ||
    /^https?:\/\//i.test(value)
  ) {
    return;
  }

  const withoutQuery = value.split(/[?#]/, 1)[0];
  let decoded;
  try {
    decoded = decodeURIComponent(withoutQuery);
  } catch {
    errors.push(`Invalid URL encoding: ${value}`);
    return;
  }

  if (decoded.startsWith("/")) {
    errors.push(`Root-relative path breaks GitHub project pages: ${value}`);
    return;
  }

  references.add(decoded);
}

for (const match of html.matchAll(/\b(?:src|href)=["']([^"']+)["']/g)) {
  addReference(match[1]);
}

for (const match of css.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)) {
  addReference(match[1]);
}

for (const match of js.matchAll(/["'`](assets\/[^"'`?#]+)["'`]/g)) {
  addReference(match[1]);
}

for (const reference of references) {
  const absolutePath = path.join(root, reference);
  if (!fs.existsSync(absolutePath)) {
    errors.push(`Missing local reference: ${reference}`);
    continue;
  }

  if (/[:\\]/.test(reference)) {
    errors.push(`Non-portable referenced filename: ${reference}`);
  }

  if (/[^\x20-\x7E]/.test(reference)) {
    errors.push(`Referenced path should use portable ASCII names: ${reference}`);
  }

  const size = fs.statSync(absolutePath).size;
  if (size > 8 * 1024 * 1024) {
    errors.push(`Referenced file exceeds 8 MiB: ${reference}`);
  }
}

const peopleImageDirectory = path.join(root, "assets/images/people");
if (fs.existsSync(peopleImageDirectory)) {
  for (const filename of fs.readdirSync(peopleImageDirectory)) {
    const imagePath = path.join(peopleImageDirectory, filename);
    if (fs.statSync(imagePath).isFile() && fs.statSync(imagePath).size > 128 * 1024) {
      errors.push(`Member portrait exceeds 128 KiB: assets/images/people/${filename}`);
    }
  }
}

const ids = [...html.matchAll(/\bid=["']([^"']+)["']/g)].map((match) => match[1]);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicateIds.length) {
  errors.push(`Duplicate HTML ids: ${[...new Set(duplicateIds)].join(", ")}`);
}

if (!/@media\s+print[\s\S]*body\s*\*[\s\S]*display:\s*none\s*!important/.test(css)) {
  errors.push("Print-blocking stylesheet is missing.");
}

if (!/body::before[\s\S]*不提供打印版本/.test(css)) {
  errors.push("Chinese print-blocking notice is missing.");
}

if (!/html\[lang=["']en["']\]\s+body::before[\s\S]*Printing is disabled/.test(css)) {
  errors.push("English print-blocking notice is missing.");
}

if (!/event\.ctrlKey[\s\S]*event\.metaKey[\s\S]*event\.key\.toLowerCase\(\)\s*===\s*["']p["'][\s\S]*event\.preventDefault\(\)/.test(js)) {
  errors.push("Ctrl/Cmd+P interception is missing.");
}

if (!/window\.print\s*=\s*showPrintNotice/.test(js)) {
  errors.push("Programmatic print protection is missing.");
}

if (!/data-src=["']https:\/\/s05\.flagcounter\.com\/count\/vuqg\//.test(html)) {
  errors.push("Hidden Flag Counter tracker is missing.");
}

if (!/class=["']flagcounter-tracker["'][^>]*loading=["']eager["']/.test(html)) {
  errors.push("Flag Counter must load eagerly so every page load can be counted.");
}

if (!/\.flagcounter-tracker\s*\{[\s\S]*?position:\s*absolute[\s\S]*?opacity:\s*0/.test(css)) {
  errors.push("Flag Counter tracker must be visually hidden.");
}

if (!/function\s+installFlagCounterTracker\s*\(/.test(js) || !/www\.nodi-lab\.org/.test(js)) {
  errors.push("Flag Counter must run only on the production domain.");
}

if (/footer-counter-block/.test(html + css)) {
  errors.push("Flag Counter must not appear in the visible footer.");
}

if (/goatcounter\.com|gc\.zgo\.at/i.test(html + css + js)) {
  errors.push("Legacy GoatCounter integration is still present.");
}

if (!/image\.loading\s*=\s*["']lazy["']/.test(js) || !/image\.fetchPriority\s*=\s*["']low["']/.test(js)) {
  errors.push("Deferred member portrait loading is missing.");
}

if (errors.length) {
  console.error("Static-site validation failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Static-site validation passed: ${references.size} local references and ${ids.length} unique HTML ids checked.`);
