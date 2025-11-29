# escape-regexp-modern

Tiny, zero-dependency, TypeScript-first function to safely escape strings for JavaScript/ECMAScript regular expressions.

## Install

```bash
npm i escape-regexp-modern
```

## Usage

```ts
// ESM
import escapeRegexp from "escape-regexp-modern";
// or: import { escapeRegexp } from "escape-regexp-modern";

console.log(escapeRegexp("a.b*")); // => a\.b\*

// Use with RegExp constructor
const userInput = "a.b*";
const re = new RegExp(escapeRegexp(userInput), "i");
console.log(re.test("xx a.b* yy")); // true
```

```js
// CommonJS
const escapeRegexp = require("escape-regexp-modern");
console.log(escapeRegexp("a.b*")); // => a\.b\*
```

## API

- `escapeRegexp(input: string): string` — Escapes all regex-special characters so the string can be used safely inside a `RegExp` constructor or literal.

### Why use this?

- Tiny (<1 KB minified), zero-deps, TypeScript types included
- Deterministic, Unicode-safe; handles backslashes, control chars, emoji, surrogate pairs

### Approach

Escapes using one global replacement that prefixes a backslash for each regex-special character (`\\^$.*+?()[]{}|/-`). Works for any Unicode input without altering non-special characters.

## Badges

[![npm downloads](https://img.shields.io/npm/dm/escape-regexp-modern.svg)](https://www.npmjs.com/package/escape-regexp-modern)
[![build status](https://img.shields.io/github/actions/workflow/status/yourname/escape-regexp-modern/ci.yml?branch=main)](https://github.com/yourname/escape-regexp-modern/actions)

## License

MIT © Your Name

## Contributing

Issues and PRs welcome!

