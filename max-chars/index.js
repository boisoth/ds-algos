/**
 * Max Characters
 */

function maxChar(str) {
  let charMap = {};
  let max = 0;
  let maxChar = "";

  // Walk through every character of the string
  // If the character map doesn't have that key(char), assign it a key with the value of 1.
  // If the character map does already have the key(char), increment the value.

  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  // Walk through every key/property of the character object
  // Check if that current key/property's value is greater than max,
  // if it is, reassign max to that current keys' value
  // And also assign the maxChar to that current key

  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
  }

  return maxChar;
}

// make sure the the str isn't emp

module.exports = maxChar;
