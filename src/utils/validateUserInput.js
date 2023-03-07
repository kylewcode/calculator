function validateUserInput(
  buttonValue,
  validatedInputs,
  formatEquation,
  handleResult
) {
  const prevValue = validatedInputs[validatedInputs.length - 1];
  const prevValueIsInteger = Number.isInteger(Number(prevValue));
  // Check if user wants to clear inputs.
  if (buttonValue === "C") {
    validatedInputs.length = 0;
    // Rule: Must start with...
  } else if (
    validatedInputs.length === 0 &&
    (buttonValue === "." ||
      buttonValue === "/" ||
      buttonValue === "X" ||
      buttonValue === "-" ||
      buttonValue === "+" ||
      buttonValue === "+|-" ||
      buttonValue === "%" ||
      buttonValue === "^")
  ) {
    validatedInputs.push("0", buttonValue);
  } else if (
    validatedInputs.length === 0 &&
    Number.isInteger(Number(buttonValue))
  ) {
    validatedInputs.push(buttonValue);
    // Rule: +|- ^
  } else if (
    (buttonValue === "+|-" || buttonValue === "^") &&
    (prevValueIsInteger || prevValue === "%")
  ) {
    validatedInputs.push(buttonValue);
    // Rule: % and .
  } else if (
    (buttonValue === "%" || buttonValue === ".") &&
    prevValueIsInteger
  ) {
    validatedInputs.push(buttonValue);
    // Rule: + - X /
  } else if (
    (buttonValue === "+" ||
      buttonValue === "-" ||
      buttonValue === "X" ||
      buttonValue === "/") &&
    (prevValueIsInteger || prevValue === "%" || prevValue === "+|-")
  ) {
    validatedInputs.push(buttonValue);
    // Rule: Digits 0-9
  } else if (
    Number.isInteger(Number(buttonValue)) &&
    (Number.isInteger(Number(prevValue)) ||
      prevValue === "+" ||
      prevValue === "-" ||
      prevValue === "X" ||
      prevValue === "/" ||
      prevValue === "." ||
      prevValue === "^")
  ) {
    validatedInputs.push(buttonValue);
    // Rule: Must end with. Handles user completing input of equation.
  } else if (
    buttonValue === "=" &&
    (prevValueIsInteger || prevValue === "%" || prevValue === "+|-")
  ) {
    formatEquation(validatedInputs, handleResult);
    validatedInputs.length = 0;
  }
  // While user is not done inputting send the current inputs for display.
  handleResult(validatedInputs);
}

export default validateUserInput;
