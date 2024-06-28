import { useState } from "react";
import { Form } from "./components/Form/Form";
import { Modal } from "./components/Modal/Modal";

import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [greeting, setGreeting] = useState("");

  function handleResults(event) {
    event.preventDefault();
    const newGreeting = `Hello ${firstName} ${lastName}`;
    console.log(greeting);
    setGreeting(newGreeting);
  }

  return (
    <>
      <Form
        firstName={firstName}
        lastName={lastName}
        setFirstName={setFirstName}
        setLastName={setLastName}
        onSubmit={handleResults}
      />
      <Modal label={greeting} />
    </>
  );
}

export default App;
