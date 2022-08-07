// Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {
  return 0.5 * base * height;
}

// Create a function that takes the age in years and returns the age in days.
function calcAge(age) {
  return age * 365;
}

// Write a function that converts hours into seconds.
function howManySeconds(hours) {
  return hours * 60 * 60;
}

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition(num) {
  return num + 1;
}

// Create a function that returns true if the first array can be nested inside the second. arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

function canNest(arr1, arr2) {
  if (
    Math.min(...arr1) > Math.min(...arr2) &&
    Math.max(...arr1) < Math.max(...arr2)
  ) {
    return true;
  } else {
    return false;
  }
}

// Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

// If f returns the larger number, return the string f.
// If g returns the larger number, return the string g.
// If the functions return the same number, return the string neither

function whichIsLarger(f, g) {
  if (f() > g()) {
    return "f";
  } else if (g() > f()) {
    return "g";
  } else {
    return "neither";
  }
}

// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

function matchHouses(step) {
  if (step === 0) {
    return 0;
  } else {
    return (step - 1) * 5 + 6;
  }
}
