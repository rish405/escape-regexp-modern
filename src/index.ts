/**
 * Escapes all characters that are meaningful in JavaScript regular expressions
 * so the returned string can be safely embedded in a RegExp constructor or literal.
 * The algorithm simply prefixes a backslash to each special char using one global replace.
 */
export function escapeRegexp(input: string): string {
  if (input.length === 0) return "";
  // Special characters: \ ^ $ . * + ? ( ) [ ] { } | / -
  const SPECIALS = /[\\^$.*+?()[\]{}|\/\-]/g;
  return input.replace(SPECIALS, "\\$&");
}

export default escapeRegexp;

