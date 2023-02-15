import Button from "./Button";
import validateUserInput from "../utils/validateUserInput";

// Validates and formats input.
function ButtonBox({ handleResult }) {
  // Problem: Send Wrapper an updated array of user inputs to display and once the user is done,
  // convert all strings representing numbers to number type before sending. If the user clears the input, the array should be emptied.
  // "1", "+", "2", "=" => [1, "+", 2]
  // "1", "+", "-", ".", "2", "=" => [1, "+", 2]
  // "2", "^", "2", "=" => [2, "^", 2]
  // "1", ".", "5", "-", "5", "0", "=" => [1.5, "-", 50]
  // "1", ".", "5", ".", "x", "5", "=" => [1.5, "x", 5]
  // "1", ".", "5", ".", "5", "=" => [1.5]
  /* 
    ["1", ".", "5", "+", "2", "0", "-", "5", "x", "2", "5", "%",
    "/", "2", "+|-", "-", "1", "+", "2", "^", "2", "x", "3", "^", 
    "2", "+", "5", "0", "%"] =>
    [1.5, "+", 20, "-", 5, "x", 25, "%", "/", -2, "-", 1, "+", 2,
    "^", 2, "x", 3, "^", 2, "+", 50, "%"] 
  */

  // const validatedInputs = [];

  // Validate user input and format or display depending on user input completion.
  // function validateUserInput(buttonValue) {
  //   const prevValue = validatedInputs[validatedInputs.length - 1];
  //   const prevValueIsInteger = Number.isInteger(Number(prevValue));
  //   // Check if user wants to clear inputs.
  //   if (buttonValue === "C") {
  //     validatedInputs.length = 0;
  //     // Rule: Must start with...
  //   } else if (
  //     validatedInputs.length === 0 &&
  //     (buttonValue === "." ||
  //       buttonValue === "/" ||
  //       buttonValue === "X" ||
  //       buttonValue === "-" ||
  //       buttonValue === "+" ||
  //       buttonValue === "+|-" ||
  //       buttonValue === "%" ||
  //       buttonValue === "^")
  //   ) {
  //     validatedInputs.push("0", buttonValue);
  //   } else if (
  //     validatedInputs.length === 0 &&
  //     Number.isInteger(Number(buttonValue))
  //   ) {
  //     validatedInputs.push(buttonValue);
  //     // Rule: +|-
  //   } else if (
  //     buttonValue === "+|-" &&
  //     (prevValueIsInteger || prevValue === "%")
  //   ) {
  //     validatedInputs.push(buttonValue);
  //     // Rule: %, ., and ^
  //   } else if (
  //     (buttonValue === "%" || buttonValue === "." || buttonValue === "^") &&
  //     prevValueIsInteger
  //   ) {
  //     validatedInputs.push(buttonValue);
  //     // Rule: + - X /
  //   } else if (
  //     (buttonValue === "+" ||
  //       buttonValue === "-" ||
  //       buttonValue === "X" ||
  //       buttonValue === "/") &&
  //     (prevValueIsInteger || prevValue === "%" || prevValue === "+|-")
  //   ) {
  //     validatedInputs.push(buttonValue);
  //     // Rule: Integers 0-9
  //   } else if (
  //     Number.isInteger(Number(buttonValue)) &&
  //     (Number.isInteger(Number(prevValue)) ||
  //       prevValue === "+" ||
  //       prevValue === "-" ||
  //       prevValue === "X" ||
  //       prevValue === "/" ||
  //       prevValue === "." ||
  //       prevValue === "^")
  //   ) {
  //     validatedInputs.push(buttonValue);
  //     // Rule: Must end with. Handles user completing input of equation.
  //   } else if (
  //     buttonValue === "=" &&
  //     (prevValueIsInteger || prevValue === "%" || prevValue === "+|-")
  //   ) {
  //     formatEquation(validatedInputs);
  //     validatedInputs.length = 0;
  //   }
  //   // While user is not done inputting send the current inputs for display.
  //   console.log(validatedInputs);
  //   handleResult(validatedInputs);
  // }

  function formatEquation() {
    // Create convertedInputs to store result.
    // While user is not done entering inputs:
    // Clear all inputs if indicated by the user.
    // Perform conversion if needed and add current input to convertedInputs.
    // If this is a complete number, convert it.
    // Else add it to convertedInputs.
    // Send convertedInputs to Wrapper.
    // Else, do not send anymore inputs until user clears result.
  }

  return (
    <div>
      <div>
        <Button sendInput={validateUserInput} displayValue={"C"} />
        <Button sendInput={validateUserInput} displayValue={"+|-"} />
        <Button sendInput={validateUserInput} displayValue={"%"} />
        <Button sendInput={validateUserInput} displayValue={"/"} />
      </div>
      <div>
        <Button sendInput={validateUserInput} displayValue={"7"} />
        <Button sendInput={validateUserInput} displayValue={"8"} />
        <Button sendInput={validateUserInput} displayValue={"9"} />
        <Button sendInput={validateUserInput} displayValue={"X"} />
      </div>
      <div>
        <Button sendInput={validateUserInput} displayValue={"4"} />
        <Button sendInput={validateUserInput} displayValue={"5"} />
        <Button sendInput={validateUserInput} displayValue={"6"} />
        <Button sendInput={validateUserInput} displayValue={"-"} />
      </div>
      <div>
        <Button sendInput={validateUserInput} displayValue={"1"} />
        <Button sendInput={validateUserInput} displayValue={"2"} />
        <Button sendInput={validateUserInput} displayValue={"3"} />
        <Button sendInput={validateUserInput} displayValue={"+"} />
      </div>
      <div>
        <Button sendInput={validateUserInput} displayValue={"0"} />
        <Button sendInput={validateUserInput} displayValue={"."} />
        <Button sendInput={validateUserInput} displayValue={"^"} />
        <Button sendInput={validateUserInput} displayValue={"="} />
      </div>
    </div>
  );
}

export default ButtonBox;
