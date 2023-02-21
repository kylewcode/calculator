// Strategy 2: Check for finished number by examining next input.
function formatEquation(validatedInputs, handleResult) {
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
      // If current input is +|-, invert the previous number.
      if (currentInput === "+|-") {
        // Find previous number.
        const lastIndex = formattedEquation.length - 1;

        for (let j = lastIndex; j >= lastIndex - 1; j--) {
          if (typeof formattedEquation[j] === "number") {
            // Invert that number in formattedEquation.
            formattedEquation[j] = formattedEquation[j] * -1;
          }
        }
      }
      // If current input is part of a number and next input is not.
      else if (isPartOfNumber(currentInput) && !isPartOfNumber(nextInput)) {
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
  const isFormatted = true;
  handleResult(formattedEquation, isFormatted);
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

export default formatEquation;
