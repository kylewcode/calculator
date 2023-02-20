import Button from "./Button";
import validateUserInput from "../utils/validateUserInput";
import formatEquation from "../utils/formatEquation";

const validatedInputs = [];

// Validates and formats input.
function ButtonBox({ handleResult }) {
  function handleValidation(buttonValue) {
    validateUserInput(
      buttonValue,
      validatedInputs,
      formatEquation,
      handleResult
    );
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
