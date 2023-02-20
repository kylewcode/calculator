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
  const [result, setResult] = useState(0);

  // Take an array representing a formatted equation or an array of validated user inputs to display.
  function handleResult(userInputs, isFormatted) {
    // (userInputs = ["0"] 99%)(True 100%)

    // (userInputs = ['9'] 99%)(True 100%)
    // (isFormatted = undefined. 99%)(True 100%)
    // If userInputs is a formatted equation, calculate result.
    // (Evaluates false. 99%)(True 100%)

    // (Evaluates false. 99%)(True 100%)
    if (isFormatted) {
      console.log("Ready to calculate: ", userInputs);
      // Update result in state.
    } else {
      // (Inputs will be displayed with no spaces between characters. 75%)(False 100%)
      // (validatedInputs = ['9']. 99%)(No access but passed as userInputs)
      // (userInputs = '9'. 40%)(True 100%)
      // (Screen will display 9. 50%)(True 100%)
      // (Screen will display a 0 after user clears user input. 50%)(False 100%)

      // (Screen will render nothing. 50%)(True 100%)
      setResult(userInputs.join(""));
      // (userInputs = ['9']. 25%)(True 100%)

      // (userInputs = ["9"]. 99%)(True 100%)
      console.log(userInputs);
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
