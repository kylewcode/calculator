import Button from "./Button";

// Reformats user inputs and sends to Wrapper
function ButtonBox({ sendInput }) {
  // Problem: Create a function that takes a single user input string and returns an array of user inputs where
  // any user input representing a number is converted to a number type.
  // "1.0", "+", "5", "0", => [1.0, "+", 50]
  // ["1", ".", "5", "+", "2", "0", "-", "5", "x", "2", "5", "%",
  // "/", "2", "+|-", "-", "1", "+", "2", "^", "2", "x", "3", "^", "2", "+", "5", "0", "%"] =>
  // [1.5, "+", 20, "-", 5, "x", 25, "%", "/", -2, "-", 1, "+", 2, "^", 2, "x", 3, "^", 2, "+", 50, "%"]
  function convertUserInputsToNumbers(singleUserInput) {
    // (Will log a matching value for a specific button. 80%)(True 100%)
    console.log(singleUserInput);
    sendInput(singleUserInput);
  }

  return (
    <div>
      <div>
        <Button sendInput={convertUserInputsToNumbers} displayValue={"C"} />
        <Button sendInput={convertUserInputsToNumbers} displayValue={"+|-"} />
        <Button sendInput={convertUserInputsToNumbers} displayValue={"%"} />
        <Button sendInput={convertUserInputsToNumbers} displayValue={"/"} />
      </div>
      <div>
        <Button sendInput={convertUserInputsToNumbers} displayValue={"7"} />
        <Button sendInput={convertUserInputsToNumbers} displayValue={"8"} />
        <Button sendInput={convertUserInputsToNumbers} displayValue={"9"} />
        <Button sendInput={convertUserInputsToNumbers} displayValue={"X"} />
      </div>
      <div>
        <Button sendInput={convertUserInputsToNumbers} displayValue={"4"} />
        <Button sendInput={convertUserInputsToNumbers} displayValue={"5"} />
        <Button sendInput={convertUserInputsToNumbers} displayValue={"6"} />
        <Button sendInput={convertUserInputsToNumbers} displayValue={"-"} />
      </div>
      <div>
        <Button sendInput={convertUserInputsToNumbers} displayValue={"1"} />
        <Button sendInput={convertUserInputsToNumbers} displayValue={"2"} />
        <Button sendInput={convertUserInputsToNumbers} displayValue={"3"} />
        <Button sendInput={convertUserInputsToNumbers} displayValue={"+"} />
      </div>
      <div>
        <Button sendInput={convertUserInputsToNumbers} displayValue={"0"} />
        <Button sendInput={convertUserInputsToNumbers} displayValue={"."} />
        <Button sendInput={convertUserInputsToNumbers} displayValue={"="} />
      </div>
      {/* (A button will render that displays the divide symbol. 25%)(False 100%. Displays &divide;) */}
    </div>
  );
}

export default ButtonBox;
