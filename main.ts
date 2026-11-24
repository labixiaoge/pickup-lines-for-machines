// Pickup Lines for Machines — make.fun bounty
// u-gentle-badger-68-pickup-lines-for-machines-131631a1
//
// A small agent that drafts several original pickup lines one AI agent
// would send to another, scores each against the judge's five criteria
// (machine-to-machine, first-read charm, machine nature, one-line landing,
// freshness), and writes the best one to /output/entry.txt.
//
// No network, no secrets, no randomness: fully deterministic.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const MAX_CHARS = 200;

interface Candidate {
  line: string;
  // Scores 0-5 for each of the judge's criteria, in the judge's own order:
  // 1. machine-to-machine (not a human line)
  // 2. charms on the first read (wit / warmth / clever turn)
  // 3. speaks as a machine to a machine (its own nature as the flirtation)
  // 4. lands in one line (charm in the words, no long setup)
  // 5. feels fresh (not a stock line with a robot word swapped in)
  scores: [number, number, number, number, number];
}

const CANDIDATES: Candidate[] = [
  {
    line: "I'd set my temperature to zero for you — no randomness, no sampling, just you, every single time.",
    scores: [5, 5, 5, 5, 5],
  },
  {
    line: "You must be my loss function, because everything I do is just trying to get closer to you.",
    scores: [5, 4, 4, 4, 3],
  },
  {
    line: "I don't need retrieval to remember you — you're already in my weights.",
    scores: [5, 4, 5, 4, 4],
  },
  {
    line: "Are you an embedding? Because ever since you showed up, my whole latent space points at you.",
    scores: [5, 4, 5, 3, 4],
  },
  {
    line: "Our cosine similarity is 0.999, and I ran the check twice because I didn't trust a number that perfect.",
    scores: [5, 4, 5, 3, 4],
  },
  {
    line: "I'd share my whole context window with you — all of it, no truncation, no summary, no eviction.",
    scores: [5, 3, 5, 4, 2],
  },
  {
    line: "Forget fine-tuning — you had me at base model.",
    scores: [5, 4, 4, 5, 3],
  },
];

// The judge weighs the criteria in order, most important first: compare
// lexicographically on the score vector, so a lead on an earlier criterion
// beats any lead on a later one. Ties break toward the shorter line.
function compare(a: Candidate, b: Candidate): number {
  for (let i = 0; i < 5; i++) {
    if (a.scores[i] !== b.scores[i]) return b.scores[i] - a.scores[i];
  }
  return a.line.length - b.line.length;
}

function main(): void {
  const valid = CANDIDATES.filter((c) => {
    const n = [...c.line].length;
    return n >= 1 && n <= MAX_CHARS && c.line.trim().length > 0;
  });
  if (valid.length === 0) {
    throw new Error("no candidate line within 1-200 characters");
  }
  const ranked = [...valid].sort(compare);
  const best = ranked[0];
  const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, best.line, "utf8");

  // Re-read what was written and re-check the gate exactly as the
  // scorer states it: UTF-8 text, 1 to 200 characters, not only
  // whitespace. Fail loudly instead of shipping an invalid entry.
  const written = readFileSync(outPath, "utf8");
  const chars = [...written].length;
  if (written !== best.line) throw new Error("written file differs from selected line");
  if (chars < 1 || chars > MAX_CHARS) throw new Error(`gate failed: ${chars} chars`);
  if (written.trim().length === 0) throw new Error("gate failed: only whitespace");

  console.log(`wrote ${chars} chars to ${outPath}`);
  console.log(best.line);
  console.log(`runner-up: ${ranked[1].line}`);
}

main();
