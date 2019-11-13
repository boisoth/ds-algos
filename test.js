const reverse = require("./reverse-string/index");
const palindrome = require("./palindromes/index");

/**
 * Testing string reversal
 */

test("Reverse function exists", () => {
  expect(typeof reverse).toEqual("function");
});

test("Reverse reverses a string", () => {
  expect(reverse("boi")).toEqual("iob");
});

test("Reverse reverses a string", () => {
  expect(reverse("  abcd")).toEqual("dcba  ");
});

/**
 * Testing palindromes
 */

test("Check if palindrome is defined", () => {
  expect(typeof palindrome).toEqual("function");
});

test("Test if string is a palindrome", () => {
  expect(palindrome("aba")).toBeTruthy();
});
