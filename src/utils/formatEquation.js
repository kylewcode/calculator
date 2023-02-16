// Write a function that takes an array of strings representing a user entering an equation into a calculator and
// passes a new array to handleResult that has all strings representing numbers turned into number type.
// Assume the equation is validated for correct format.
// Ex: ["1", "+", "2"] => [1, "+", 2]
// ["5", "0", "+", "1"] => [50, "+", 1]
// ["1", ".", "5", "-", "2"] => [1.5, "-", 2]
// ["5", ".", "5", "%", "X", "5" => [5.5, "%", "X", 5]

// Strategy 2: Check for finished number by examining next input.
function formatEquation(validatedInputs) {
  // Create variables to store current number and result.
  let currentNum = "";
  const formattedEquation = [];
  // n times:
  for (let i = 0; i < validatedInputs.length; i++) {
    const currentInput = validatedInputs[i];
    const nextInput = validatedInputs[i + 1];
    // If number is not done...
    // If current and next input are parts of numbers.
    if (arePartsOfNumbers(currentInput, nextInput)) {
      // Build up the current number.
      currentNum = currentNum + currentInput;
      // If number is done...
    } else {
      // Handle different scenarios for currentInput.
      // If current input is part of a number and next input is not.
      if (isPartOfNumber(currentInput) && !isPartOfNumber(nextInput)) {
        // Add it to current number, convert it, and add to result.
        currentNum = currentNum + currentInput;
        formattedEquation[formattedEquation.length] = Number(currentNum);
        // Clear current number.
        currentNum = "";
        // Else add current input to result
      } else {
        formattedEquation[formattedEquation.length] = currentInput;
      }
    }
  }
  console.log(formattedEquation);
}

function arePartsOfNumbers(current, next) {
  if (
    (Number.isInteger(Number(current)) || current === ".") &&
    (Number.isInteger(Number(next)) || next === ".")
  ) {
    return true;
  }
  return false;
}

function isPartOfNumber(input) {
  if (Number.isInteger(Number(input)) || input === ".") {
    return true;
  }
  return false;
}

// 40%

export default formatEquation;
