import styles from "./App.module.css";
import { useState } from "react";

const defaultTodos = [
  {
    id: self.crypto.randomUUID(),
    title: "Buy Flowers",
    status: "active",
  },
  {
    id: self.crypto.randomUUID(),
    title: "Go to the gym",
    status: "done",
  },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [inputValue, setInputValue] = useState("");

  const [filter, setFilter] = useState("all");

  function addTodo(e) {
    e.preventDefault();
    if (!inputValue.length) return;
    const id = self.crypto.randomUUID();
    const title = inputValue;
    setTodos([...todos, { id, title, status: "active" }]);
    setInputValue("");
  }

  function onHandleInput(e) {
    setInputValue(e.target.value);
  }

  function deleteTodo(e) {
    const newTodos = todos.filter((todo) => todo.id !== e.target.id);
    setTodos(newTodos);
  }

  function handleFilter(e) {
    const filterName = e.target.name;
    setFilter(filterName);
  }

  function handleStatus(id) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: "done" } : todo
    );
    setTodos(updatedTodos);
  }

  const filteredTodos =
    filter === "all" ? todos : todos.filter((todo) => todo.status === filter);

  return (
    <>
      <h1>ToDo List</h1>
      <div className={styles.mainContainer}>
        <form className={styles.form} onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Input"
            onChange={onHandleInput}
            value={inputValue}
          />
          <input type="submit" value="ADD" />
        </form>

        <div className={styles.todos}>
          <div className={styles.category}>
            <button name="all" onClick={handleFilter}>
              All
            </button>
            <button name="active" onClick={handleFilter}>
              Active
            </button>
            <button name="done" onClick={handleFilter}>
              Done
            </button>
          </div>

          <ul>
            {filteredTodos.map((todo) => (
              <li key={todo.id}>
                <input type="checkbox" onChange={() => handleStatus(todo.id)} />
                {todo.title}
                <button id={todo.id} onClick={deleteTodo}>
                  x
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
