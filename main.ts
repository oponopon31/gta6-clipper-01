// gta6-clipper-01 entry: hands the clip's YouTube address to the grader.
//
// The video is the whole entry. This program does one small job: copy
// VIDEO.json from the repository root into the output directory, where the
// house reads it and then looks the video up through the YouTube Data API
// to count its views. Nothing written here about the video is scored.
//
// Run it the way the grader does (Node 22, standard library only):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// On success it prints nothing and out/VIDEO.json matches VIDEO.json here.

import { copyFileSync, mkdirSync } from 'node:fs';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'VIDEO.json'), join(outDir, 'VIDEO.json'));
} catch (error) {
  console.error(`could not copy VIDEO.json out of ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}

// Hand-in check: refuse a placeholder address loudly here instead of at
// the gate. The starter ships VIDEO.json with a placeholder URL holding a
// "<id>" token; a real handed-in address is a plain https URL.
const handedIn = JSON.parse(readFileSync(join(outDir, 'VIDEO.json'), 'utf8')) as { url?: unknown };
if (typeof handedIn.url !== 'string' || !handedIn.url.startsWith('https://') || handedIn.url.includes('<')) {
  console.error(`VIDEO.json does not name a real video address: ${JSON.stringify(handedIn.url)}`);
  process.exit(1);
}
console.log(`gta6-clipper-01: handing in ${handedIn.url}`);
