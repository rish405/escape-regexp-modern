import { describe, it, expect } from "vitest";
import escapeRegexp, { escapeRegexp as named } from "./index";

describe("escapeRegexp", () => {
  it("exports both default and named", () => {
    expect(typeof escapeRegexp).toBe("function");
    expect(escapeRegexp).toBe(named);
  });

  it("keeps plain letters unchanged", () => {
    expect(escapeRegexp("abc")).toBe("abc");
  });

  it("escapes special regex characters", () => {
    const input = ".*+?^${}()|[]\\/";
    const expected = "\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\\\/";
    expect(escapeRegexp(input)).toBe(expected);
  });

  it("escapes backslashes and repeats deterministically", () => {
    expect(escapeRegexp("foo\\bar\\baz")).toBe("foo\\\\bar\\\\baz");
    expect(escapeRegexp("---")).toBe("\\-\\-\\-");
    expect(escapeRegexp("[][]")).toBe("\\[\\]\\[\\]");
  });

  it("handles empty string", () => {
    expect(escapeRegexp("")).toBe("");
  });

  it("handles unicode and emoji", () => {
    expect(escapeRegexp("💩")).toBe("💩");
    expect(escapeRegexp("😊.*")).toBe("😊\\.\\*");
    expect(escapeRegexp("𠮷[ ]")).toBe("𠮷\\[ \\]");
  });

  it("works in RegExp constructor and matches literal", () => {
    const userInput = "a.b* (we) [test] 𠮷 / path \\ back";
    const re = new RegExp(escapeRegexp(userInput));
    const text = `prefix ${userInput} suffix`;
    expect(re.test(text)).toBe(true);
  });
});
