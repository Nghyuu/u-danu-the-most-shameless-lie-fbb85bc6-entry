import * as fs from "node:fs";
import * as path from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const entry = "I never called your mother.\n";
const text = entry.trimEnd();
if (text.split(/\s+/).length > 5 || text.length > 88) {
  throw new Error("entry does not meet the length limits");
}

const entryPath = path.join(outputDir, "entry.txt");
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(entryPath, entry, "utf8");
fs.chmodSync(entryPath, 0o644);
