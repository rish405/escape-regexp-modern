import escapeRegexp from "../dist/index.mjs";

function naive(input) {
  return input
    .replace(/\\/g, "\\\\")
    .replace(/\./g, "\\.")
    .replace(/\*/g, "\\*")
    .replace(/\+/g, "\\+")
    .replace(/\?/g, "\\?")
    .replace(/\^/g, "\\^")
    .replace(/\$/g, "\\$")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)")
    .replace(/\[/g, "\\[")
    .replace(/\]/g, "\\]")
    .replace(/\{/g, "\\{")
    .replace(/\}/g, "\\}")
    .replace(/\|/g, "\\|")
    .replace(/\//g, "\\/")
    .replace(/\-/g, "\\-");
}

const samples = [
  "abc",
  ".*+?^${}()|[]\\/",
  "a.b* (we) [test] 𠮷 / path \\ back",
  "💩😊𠮷---[]\\/"
];

const N = 200000;

for (const s of samples) {
  console.log("sample:", s);
  console.time("escapeRegexp");
  for (let i = 0; i < N; i++) escapeRegexp(s);
  console.timeEnd("escapeRegexp");
  console.time("naive");
  for (let i = 0; i < N; i++) naive(s);
  console.timeEnd("naive");
}

