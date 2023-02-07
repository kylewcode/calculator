function Button(props) {
  return (
    <div className="button">
      <button type="button">{props.displayValue}</button>
      {/* (For "&divide;", displayValue is as string. 99%)(True 100%) */}
    </div>
  );
}

export default Button;
