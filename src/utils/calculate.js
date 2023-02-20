// Ideal input
// [1.5, "+", 20, "-", 5, "x", 25, "%", "/", -2, "-", 1, "+", 2, "^", 2, "x", 3, "^", 2, "+", 50, "%"]

/* Strategy 2: Evaluate by segments */

// TODO: need to account for 2^3^2 scenarios. I did not specifically define the problem of which means there may be more \
// scenarios that I am missing.

// Function expects array of inputs to start and end with a string representing a number.
function calculate(userInputs) {
  // Convert inputArray string numbers to number types.
  // Create variable and store original equation.
  // Create segments variable to store segments.
  // Search original equation for an exponent
  // If found, store the segment in a new variable.
  // Store variable in segments.
  // Continue until all exponents are found.
  // Search entire equation for contiguous multiplication and/or division.
  // If found, store the segment in a new variable.
  // Store variable in segments.
  // Continue until all are found.
  // Search entire equation for contiguous addition and/or subtraction.
  // If found, store the segment in a new variable.
  // Store variable in segments.
  // Continue until all are found.
  // For each stored segment:
  // Evaluate segments.
  // Evauate original equation.
  return;
}

// function convertUserInputsToNumbers(inputArray) {
//   // Create new array to store converted inputs.
//   const userInputs = [];
//   // Search input array for contiguous strings representing numbers.
//   let currentStringNum = "";
//   let currentNum = 0;
//   for (let i = 0; i < inputArray.length; i++) {
//     // Combine them.
//     // If current input is a number or decimal, store it
//     if (!isNaN(inputArray[i]) || inputArray[i] === ".") {
//       currentStringNum += inputArray[i];
//       // Else, convert to Number type and store it.
//       // TODO: Need to account for % and +|-
//       // Problem 1: Accounting for percentages
//     } else if (inputArray[i - 1] === "%") {
//       userInputs.push(inputArray[i]);
//       // Problem 2: Accounting for inverted values
//       // If this is an inverted value
//     } else if (inputArray[i] === "+|-") {
//       // Invert the value and add to userInputs
//       // If it's negative, make it positive.
//       // If it's positive, make it negative.
//       userInputs.push();
//     } else {
//       currentNum = Number(currentStringNum);
//       userInputs.push(currentNum, inputArray[i]);
//     }
//     // Repeat until all elements are examined.
//     // (userInputs will equal an array similar to inputArray except that string numbers will be combined and be in Number format. 80%)(False 100%. Array is empty.)
//   }
// }

export default calculate;
