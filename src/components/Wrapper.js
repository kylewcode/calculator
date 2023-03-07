import { useState } from "react";

import ButtonBox from "./ButtonBox";
import Screen from "./Screen";
import calculate from "../utils/calculate";

// const result = calculate([
//   "1",
//   ".",
//   "5",
//   "+",
//   "2",
//   "0",
//   "-",
//   "5",
//   "x",
//   "2",
//   "5",
//   "%",
//   "/",
//   "2",
//   "+|-",
//   "-",
//   "1",
//   "+",
//   "2",
//   "^",
//   "2",
//   "x",
//   "3",
//   "^",
//   "2",
//   "+",
//   "5",
//   "0",
//   "%",
// ]); // 85.6875

// Calculates result and sends to Screen for display.
function Wrapper() {
  const [result, setResult] = useState(null);

  // Take an array representing a formatted equation or an array of validated user inputs to display.
  function handleResult(userInputs, isFormatted) {
    if (userInputs.length === 0) {
      setResult(null);
      // If userInputs is a formatted equation, calculate result.
    } else if (isFormatted) {
      console.log(calculate(userInputs));
      // Update result in state.
    } else {
      setResult(userInputs.join(""));
    }
  }

  return (
    <div>
      <Screen display={result} />
      <ButtonBox handleResult={handleResult} />
    </div>
  );
}

export default Wrapper;
