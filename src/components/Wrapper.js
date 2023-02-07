import ButtonBox from "./ButtonBox";
import Screen from "./Screen";
import calculate from "../utils/calculate";

const result = calculate([
  "1",
  "0",
  "+",
  "2",
  "0",
  "-",
  "5",
  "x",
  "3",
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
]); // 50

function Wrapper() {
  return (
    <div>
      <Screen display={result} />
      <ButtonBox />
    </div>
  );
}

export default Wrapper;
