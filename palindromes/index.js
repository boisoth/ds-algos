// A palidrome is a word spelled the same way backwards
// racecar is racecar

function palindrome(str) {
  let rev = "";

  for (let char of str) {
    rev = char + rev;
  }

  return rev === str || false;
}

module.exports = palindrome;
