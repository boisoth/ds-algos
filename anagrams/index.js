function anagrams(strA, strB) {
  const aMap = buildCharMap(strA);
  const bMap = buildCharMap(strB);
}

// Helper functions to build map
function buildCharMap(str) {
  const charMap = {};

  // Make sure we iterate through and remove all whitespace
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

module.exports = anagrams;
