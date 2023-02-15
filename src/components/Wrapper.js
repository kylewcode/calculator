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
  function handleResult(userInputs) {
    // console.log("handling result...");
    // (Will log only a valid equation despite incorrect user inputs. 25%)(False 100%. For integer 9, no other values are added to array.)
    // (Will log an array of strings representing integers when user inputs only integers. 50%)(False 50%. The first integer is added twice.)
    // console.log(userInputs);
    // If userInputs is a formatted equation, calculate result.
    // Update result in state.
  }

  return (
    <div>
      <Screen display={result} />
      <ButtonBox handleResult={handleResult} />
    </div>
  );
}

export default Wrapper;
