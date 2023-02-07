import Button from "./Button";

function ButtonBox() {
  return (
    <div>
      <div>
        <Button displayValue={"C"} />
        <Button displayValue={"+|-"} />
        <Button displayValue={"%"} />
        <Button displayValue={"/"} />
      </div>
      <div>
        <Button displayValue={"7"} />
        <Button displayValue={"8"} />
        <Button displayValue={"9"} />
        <Button displayValue={"X"} />
      </div>
      <div>
        <Button displayValue={"4"} />
        <Button displayValue={"5"} />
        <Button displayValue={"6"} />
        <Button displayValue={"-"} />
      </div>
      <div>
        <Button displayValue={"1"} />
        <Button displayValue={"2"} />
        <Button displayValue={"3"} />
        <Button displayValue={"+"} />
      </div>
      <div>
        <Button displayValue={"0"} />
        <Button displayValue={"."} />
        <Button displayValue={"="} />
      </div>
      {/* (A button will render that displays the divide symbol. 25%)(False 100%. Displays &divide;) */}
    </div>
  );
}

export default ButtonBox;
