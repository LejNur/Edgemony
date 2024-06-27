import "./Button.css";

function Button(props) {
  const { label, onButtonClick } = props;
  return (
    <button className="btn" onClick={() => onButtonClick(label)}>
      {label}
    </button>
  );
}

export { Button };
