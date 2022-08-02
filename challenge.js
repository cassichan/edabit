// Create a function that returns the index of the first vowel in a string.

let testStr = "crazy";

function findFirstVowelIndex(str) {
  for (i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "a") {
      return i;
    } else if (str[i].toLowerCase() === "e") {
      return i;
    } else if (str[i].toLowerCase() === "i") {
      return i;
    } else if (str[i].toLowerCase() === "o") {
      return i;
    } else if (str[i].toLowerCase() === "u") {
      return i;
    }
  }
}
console.log(findFirstVowelIndex(testStr));

//Another way
function firstVowel(str) {
  return str.toLowerCase().indexOf(str.toLowerCase().match(/[aeiou]/));
}
