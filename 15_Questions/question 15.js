function countVowels(text) {
  let vowelCount = 0;

  for (const character of text.toLowerCase()) {
    if ("aeiou".includes(character)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

console.log(countVowels("Hello, World!"));
