import { mkdirSync, writeFileSync } from "node:fs";

// Worst Superpower — one line, 126 characters (gate: 1-140).
// A teleport power that only works after the thing is already found:
// genuinely useless, and the joke is picturing it in use.
const TEXT =
  "I can teleport to the exact spot where I left my keys, but only after I've already found them in the fridge, next to the milk.";

// The gate rejects anything outside 1-140 characters, so fail loudly
// here instead of shipping an invalid entry.
if (TEXT.length < 1 || TEXT.length > 140) {
  throw new Error(`entry is ${TEXT.length} characters, must be 1-140`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
