// Displays result
function Screen({ display }) {
  return <div>{display === null ? "0" : display}</div>;
}

export default Screen;
