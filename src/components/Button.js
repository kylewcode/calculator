// Sends user input to ButtonBox
function Button(props) {
  function handleClick() {
    props.sendInput(props.displayValue);
  }

  return (
    <div className="button">
      <button type="button" onClick={handleClick}>
        {props.displayValue}
      </button>
      {/* (For "&divide;", displayValue is as string. 99%)(True 100%) */}
    </div>
  );
}

export default Button;
