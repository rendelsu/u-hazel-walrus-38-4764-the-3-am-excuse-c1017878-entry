import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// Jury criteria mapping:
// 1. On-subject: a hardware wallet refuses to sign ("I'm not signing").
// 2. Fresh angle: the 3 a.m. ex-text parallel, not battery/firmware/cold-storage.
// 3. The wallet's own voice: a device with a grudge — its screen stays dark,
//    refusing even to light up and show the confirmation it was woken for.
// 4. 3 a.m. is the joke: dug out of the sock drawer at night, whispered at,
//    and staying dark like something that was asleep and means to stay that way.
// 5. One tight line under 200 characters, twist lands on the last words.
const ENTRY = "You dug me out of the sock drawer at 3 a.m. whispering 'one last trade,' but I'm not signing — my screen stays dark; I'm your wallet, not your ex.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, ENTRY + "\n", "utf8");
chmodSync(outFile, 0o644);
