// Sends user input to ButtonBox
function Button({ sendInput, displayValue }) {
  function handleClick() {
    sendInput(displayValue);
  }

  return (
    <div className="button">
      <button type="button" onClick={handleClick}>
        {displayValue}
      </button>
    </div>
  );
}

export default Button;
