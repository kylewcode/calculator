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

  function handleUserInput(userInput) {
    // (Will log a matching value for a specific button. 99%)(False 100% Does not log anything. No console.log)
    // (Screen will display matching value for clicked button. 99%)(True 100%)
    setResult(userInput);
  }

  return (
    <div>
      {/* (Screen will render 0. 80%)(True 100%) */}
      <Screen display={result} />
      <ButtonBox sendInput={handleUserInput} />
    </div>
  );
}

export default Wrapper;
