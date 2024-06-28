import "./Form.css";
import { Modal } from "../Modal/Modal";

function Form(props) {
  const { firstName, lastName, setFirstName, setLastName, onSubmit } = props;

  return (
    <form className="form" onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <button>Greet Me</button>
    </form>
  );
}

export { Form };
