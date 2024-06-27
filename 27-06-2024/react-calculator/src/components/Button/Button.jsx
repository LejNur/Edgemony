import "./Button.css";

function Button(props) {
  const { value, onButtonClick } = props;
  return (
    <button className="btn" onClick={() => onButtonClick(value)}>
      {value}
    </button>
  );
}

export { Button };
