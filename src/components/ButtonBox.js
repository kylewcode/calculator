import Button from "./Button";

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

  /* It seems that only specific strings are allowed to follow specific strings. Ex: "1" -> "." -> "." is not valid.
 In order display a proper equation, user input will need to be validated and formatted as it is displayed.*/
  function validateUserInput(buttonValue) {
    // Validate user input.
    // If user is done entering equation, format it.
    // Else send the current inputs for display.
  }

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
      {/* (A button will render that displays the divide symbol. 25%)(False 100%. Displays &divide;) */}
    </div>
  );
}

export default ButtonBox;
