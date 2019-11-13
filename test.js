const reverse = require("./reverse-string/index");
const palindrome = require("./palindromes/index");
const intRev = require("./interger-reversal");

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

test("Test if 'bag' is NOT a palindrome", () => {
  expect(palindrome("bag")).toBeFalsy();
});

/**
 * Testing Integer reversal
 */

test("Test if intRev is defined", () => {
  expect(typeof intRev).toEqual("function");
});

test("Test if -21 is -21", () => {
  expect(intRev(-21)).toBe(-12);
});

test("Test if the integer reversal kept the pos/neg sign", () => {
  expect(intRev(-47)).toBe(-74);
});

//  test("Test if 35 is NOT 53", ()=>{

//  })

test("Test to fail if value ends with a zero", () => {
  expect(intRev(320)).toBeFalsy();
});
