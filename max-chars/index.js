/**
 * Max Characters
 */

function maxChar(str) {
  const charObj = {};
  let max = 0;
  let maxChar = "";

  // creating a character map and assigning with 1 or incrementing the value
  for (let char of str) {
    if (!charObj[char]) {
      charObj[char] = 1;
    } else {
      charObj[char]++;
    }
  }

  // loop each key of that character map
  for (let key in charObj) {
    if (charObj[key] > max) {
      max = charObj[key];
      maxChar = key;
    }
  }

  console.log(maxChar);
  return maxChar;
}

maxChar("yaaaaay");

module.exports = maxChar;
