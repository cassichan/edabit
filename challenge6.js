// Create a function that takes two arrays and insert the second array in the middle of the first array.

let arr1 = [4, 5];
let arr2 = [2, 8, 9, 10];

function insertArray(arr1, arr2) {
  let addToEnd = arr2.push(arr1[1]);
  let addToFront = arr2.unshift(arr1[0]);
  return arr2;
}

console.log(insertArray(arr1, arr2));

function tuckIn(arr1, arr2) {
  return [arr1[0], ...arr2, arr1[1]];
}

console.log(tuckIn(arr1, arr2))