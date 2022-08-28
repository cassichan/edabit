// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

// To illustrate:
// largestSwap(27) ➞ false
// largestSwap(43) ➞ true

//Compare value of two digits in one number. seperate number to digits.
//Switch order of digits in number -> turn to string and reverse
//Join string of digits back into number
//Compare which is greater, first num or new reversed num & use conditional to return true or false

let num = 89;

function largestSwap(num) {
  let stringedNum = String(num); //turn num to string of digits
  let arrayOfStringedNums = stringedNum.split(""); //turn string of digits to array of substrings (digits)
  let reversedDigits = arrayOfStringedNums.reverse(); //reverse substrings
  let reversedNum = reversedDigits.join(""); //join substrings back to num
  if (reversedNum > num) {
    return false;
  } else {
    return true;
  }
}

console.log(largestSwap(num));

//Chained solution
function largestSwap(num) {
  let reversedNum = String(num).split("").reverse().join("");
  if (reversedNum > num) {
    return false;
  } else {
    return true;
  }
}

console.log(largestSwap(num));
