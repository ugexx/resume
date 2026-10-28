/**
 * Fail the build when a raw hex color appears outside the token file.
 * Scans implementation source under src/. Brand SVG/PNG in public/ are assets, not styles.
 * Fragments such as #decisions are not colors: a match must be a 3, 4, 6, or 8 digit hex
 * that is not part of a longer identifier.
 */
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const srcDir = path.join(root, "src");
const tokenFile = path.normalize(path.join(srcDir, "styles", "tokens.css"));
const hex = /(?<![A-Za-z0-9_-])#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{4}|[0-9a-fA-F]{3})(?![A-Za-z0-9_-])/g;

async function files(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await files(full)));
    else out.push(full);
  }
  return out;
}

const hits = [];
for (const file of await files(srcDir)) {
  if (path.normalize(file) === tokenFile) continue;
  const text = await readFile(file, "utf8");
  const lines = text.split("\n");
  lines.forEach((line, index) => {
    hex.lastIndex = 0;
    const found = line.match(hex);
    if (found) hits.push(`${path.relative(root, file)}:${index + 1} ${found.join(" ")}`);
  });
}

if (hits.length) {
  console.error("Raw hex colors outside src/styles/tokens.css:\n" + hits.join("\n"));
  process.exit(1);
}

console.log("check-hex: no raw hex outside src/styles/tokens.css");
