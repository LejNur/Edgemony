import "./Modal.css";

function Modal(props) {
  const { label } = props;
  return <div className="dialog">{label}</div>;
}

export { Modal };
