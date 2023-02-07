/* eslint-disable */

// Problem: Take inputs and evaluate as mathematical equation according to PEMDAS rules.

// ["1", "0", "+", "2", "0", "-", "5", "x", "3", "-", "1", "+", "2", "^", "2", "x", "3", "^", "2"] => 50

// Input contraints
// Array of strings representing single digit numbers or mathematical operators.
// Array will begin and end with a string representing a number.
// Numbers will appear one or more times consecutively.
// An operand will never appear next to another operand.
// Array will contain at least two numbers with an operand between them.
// Numbers can be positive or negative.

/* Strategy 2: Evaluate by segments */

// Function expects array of inputs to start and end with a string representing a number.
function calculate(inputArray) {
  // Create new array to store converted inputs.
  const userInputs = [];
  // Search input array for contiguous strings representing numbers.
  let currentStringNum = "";
  let currentNum = 0;
  for (let i = 0; i < inputArray.length; i++) {
    // Combine them.
    // If current input is a number, store it
    if (parseInt(inputArray[i]) !== NaN) {
      // NaN will never equal NaN. That's why this isn't working.
      currentStringNum += inputArray[i];
      // Else, convert to Number type and store it.
    } else {
      currentNum = Number(currentStringNum);
      userInputs.push(currentNum, inputArray[i]);
    }
    // Repeat until all elements are examined.
    // (userInputs will equal an array similar to inputArray except that string numbers will be combined and be in Number format. 80%)(False 100%. Array is empty.)
  }
  console.log(userInputs);
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

export default calculate;
