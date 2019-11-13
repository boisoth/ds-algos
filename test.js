const reverse = require("./reverse-string/index");
const palindrome = require("./palindromes/index");

/**
 * Testing string reversal
 */

test("Reverse function is defined", () => {
  expect(typeof reverse).toEqual("function");
});

test("Reverse reverses Boi to be ioB", () => {
  expect(reverse("boi")).toEqual("iob");
});

test("Reverse reverses abcd to be dcba", () => {
  expect(reverse("  abcd")).toEqual("dcba  ");
});

/**
 * Testing palindromes
 */

test("Test if palindrome is defined", () => {
  expect(typeof palindrome).toEqual("function");
});

test("Test if 'aba' is a palindrome", () => {
  expect(palindrome("aba")).toBeTruthy();
});

test("Test if 'bag' isn't a palindrome", () => {
  expect(palindrome("   aba")).toBeFalsy();
});
