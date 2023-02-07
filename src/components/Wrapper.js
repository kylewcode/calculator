import ButtonBox from "./ButtonBox";
import Screen from "./Screen";
import calculate from "../utils/calculate";

const result = calculate([
  "1",
  ".",
  "5",
  "+",
  "2",
  "0",
  "-",
  "5",
  "x",
  "2",
  "5",
  "%",
  "/",
  "2",
  "+|-",
  "-",
  "1",
  "+",
  "2",
  "^",
  "2",
  "x",
  "3",
  "^",
  "2",
  "+",
  "5",
  "0",
  "%",
]); // 85.6875

function Wrapper() {
  return (
    <div>
      <Screen display={result} />
      <ButtonBox />
    </div>
  );
}

export default Wrapper;
