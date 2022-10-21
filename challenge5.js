// Create a function that takes two arguments.
// Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

const checkIfTen = (a, b) => {
  if (a === 10 || b === 10) {
    return true;
  } else if (a + b === 10) {
    return true;
  } else {
    return false;
  }
};

console.log(checkIfTen(5, 2));

const checkIfTenWithTernary = (a, b) => {
  return a === 10 || b === 10 || a + b === 10 ? true : false;
};

console.log(checkIfTenWithTernary(4, 6));

//Create a function that removes the first and last characters of a string, and returns the updated string.

const removeFromString = (str) => {
 return str.slice(1, -1)
}

console.log(removeFromString('Testing'))