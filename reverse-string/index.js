/**
 * Directions
 * Given a string, return a new string with the reversed order of characters
 * Examples:
 * reverse('apple') === 'leppa
 */

function reverse(str) {
  let rev = "";
  for (let char of str) {
    rev = char + rev;
  }

  return rev;
}

module.exports = reverse;

// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// function reverse(str) {
//   return str.split("").reduce((reversed, char) => {
//     return (reversed = char + reversed);
//   }, "");
// }
