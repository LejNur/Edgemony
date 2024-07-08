import styles from "./App.module.css";
import { useState } from "react";

const defaultTodos = [
  {
    id: self.crypto.randomUUID(),
    title: "Buy Milk",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Go to the gym",
  },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [inputValue, setInputValue] = useState("");

  function addTodo(e) {
    e.preventDefault();
    if (!inputValue.length) return;
    const id = self.crypto.randomUUID();
    const title = inputValue;
    setTodos([...todos, { id, title }]);
    setInputValue("");
  }

  function onHandleInput(e) {
    setInputValue(e.target.value);
  }

  function deleteTodo(e) {
    const newTodos = todos.filter((todo) => todo.id !== e.target.id);
    setTodos(newTodos);
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <form className={styles.form} onSubmit={addTodo}>
          <input type="text" onChange={onHandleInput} value={inputValue} />
          <input type="submit" value="Submit" />
        </form>

        <div className={styles.todos}>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.title}
                <button id={todo.id} onClick={deleteTodo}>
                  -
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
