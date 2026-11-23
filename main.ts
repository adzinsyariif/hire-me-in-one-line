// Hire Me In One Line — make.fun bounty u-kiencx-hire-me-in-one-line-5a108081
//
// Writes the entry sentence to <outDir>/entry.txt (default /output/entry.txt).
// Deterministic: no randomness, no clock, no network, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Give me a rough brief at nine and I'll hand you working software by lunch — tested, documented, and ready to ship.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
