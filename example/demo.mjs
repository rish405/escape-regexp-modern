import escapeRegexp from "../dist/index.mjs";

const userInput = "a.b* (we) [test] / path \\ back";
const re = new RegExp(escapeRegexp(userInput), "i");
console.log({ escaped: escapeRegexp(userInput), matches: re.test(`prefix ${userInput} suffix`) });

