import { useState } from "react";
import styles from "./App.module.css";

import { Form } from "./components/Form/Form";
import { Student } from "./components/Student/Student";
import { Filter } from "./components/Filter/Filter";

const initialState = [
  {
    id: self.crypto.randomUUID(),
    firstName: "Anna",
    lastName: "Traina",
    level: "beginner",
  },
  {
    id: self.crypto.randomUUID(),
    firstName: "Ewan",
    lastName: "Scott",
    level: "advanced",
  },
];

function App() {
  const [students, setStudents] = useState(initialState);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    level: "",
  });

  const [filter, setFilter] = useState("all");

  function handleInput(e) {
    setInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  function handleFilter(e) {
    setFilter(e.target.name);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newStudent = {
      id: self.crypto.randomUUID(),
      firstName: input.firstName,
      lastName: input.lastName,
      level: input.level,
    };

    setStudents((prevState) => [...prevState, newStudent]);
    setInput({ firstName: "", lastName: "", level: "" });
  }

  function handleDelete(e) {
    const newStudents = students.filter(
      (student) => student.id !== e.target.id
    );
    setStudents(newStudents);
  }

  const filteredStudents =
    filter === "all"
      ? students
      : students.filter((student) => student.level === filter);

  return (
    <>
      <h1>PianoLab</h1>
      <Form
        onHandleInput={handleInput}
        onHandleSubmit={handleSubmit}
        onHandleFilter={handleFilter}
        inputValue={input}
      />
      <Filter onHandleFilter={handleFilter} students={students} />
      {filteredStudents.map((student) => {
        return (
          <Student
            student={student}
            key={student.id}
            onHandleDelete={handleDelete}
          />
        );
      })}
    </>
  );
}

export default App;
