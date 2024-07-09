import styles from "./Student.module.css";

function Student(props) {
  const { student, onHandleDelete } = props;
  return (
    <div className={styles.studentContainer}>
      <p>
        {student.firstName} {student.lastName}
      </p>
      <span>Level: {student.level}</span>
      <button id={student.id} onClick={onHandleDelete}>
        Remove Student
      </button>
    </div>
  );
}

export { Student };
