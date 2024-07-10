import styles from "./Form.module.css";

function Form(props) {
  const { onHandleInput, inputValue, onHandleSubmit } = props;

  return (
    <div className={styles.formContainer}>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          name="firstName"
          onChange={onHandleInput}
          value={inputValue.firstName}
        />
        <input
          type="text"
          name="lastName"
          onChange={onHandleInput}
          value={inputValue.lastName}
        />

        <select
          className={styles.select}
          name="level"
          onChange={onHandleInput}
          value={inputValue.level}
        >
          <option value="">Select Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <button type="submit">Add new student</button>
      </form>
    </div>
  );
}

export { Form };
