// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

let arr = [2, 6, 10];

function findMinAndMax(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return [min, max];
}

console.log(findMinAndMax(arr));

// Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

//Take array of numbers and calculate total
//Loop through array and add numbers together, return total (new variable)

let valuesResistancearr = [3, 6, 7];

function seriesResistance(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total <= 1) {
    return `${total} ohm`;
  } else {
    return `${total} ohms`;
  }

  //alternate solution
  //   const initialValue = 0;
  //   const sum = arr.reduce(
  //     (previousValue, currentValue) => previousValue + currentValue,
  //     initialValue
  //   );
  //   if (sum <= 1) {
  //     return `${sum} ohm`;
  //   } else {
  //     return `${sum} ohms`;
  //   }
}

console.log(seriesResistance(valuesResistancearr));
