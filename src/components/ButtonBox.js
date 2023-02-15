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

  const validatedInputs = [];
  function handleValidation(buttonValue) {
    validateUserInput(
      buttonValue,
      validatedInputs,
      formatEquation,
      handleResult
    );
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
        <Button sendInput={handleValidation} displayValue={"C"} />
        <Button sendInput={handleValidation} displayValue={"+|-"} />
        <Button sendInput={handleValidation} displayValue={"%"} />
        <Button sendInput={handleValidation} displayValue={"/"} />
      </div>
      <div>
        <Button sendInput={handleValidation} displayValue={"7"} />
        <Button sendInput={handleValidation} displayValue={"8"} />
        <Button sendInput={handleValidation} displayValue={"9"} />
        <Button sendInput={handleValidation} displayValue={"X"} />
      </div>
      <div>
        <Button sendInput={handleValidation} displayValue={"4"} />
        <Button sendInput={handleValidation} displayValue={"5"} />
        <Button sendInput={handleValidation} displayValue={"6"} />
        <Button sendInput={handleValidation} displayValue={"-"} />
      </div>
      <div>
        <Button sendInput={handleValidation} displayValue={"1"} />
        <Button sendInput={handleValidation} displayValue={"2"} />
        <Button sendInput={handleValidation} displayValue={"3"} />
        <Button sendInput={handleValidation} displayValue={"+"} />
      </div>
      <div>
        <Button sendInput={handleValidation} displayValue={"0"} />
        <Button sendInput={handleValidation} displayValue={"."} />
        <Button sendInput={handleValidation} displayValue={"^"} />
        <Button sendInput={handleValidation} displayValue={"="} />
      </div>
    </div>
  );
}

export default ButtonBox;
