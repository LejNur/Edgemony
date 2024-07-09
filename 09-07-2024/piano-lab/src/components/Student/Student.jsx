import styles from "./Student.module.css";

function Student(props) {
  const { student, onHandleDelete } = props;

  return (
    <div className={styles.studentContainer}>
      <p>
        {student.firstName} {student.lastName}
      </p>
      <span>
        Level: {student.level}{" "}
        {student.level === "beginner" && (
          <span className={`${styles.icon} ${styles.iconBeginner}`}>
            <ion-icon name="ellipse"></ion-icon>
          </span>
        )}
        {student.level === "intermediate" && (
          <span className={`${styles.icon} ${styles.iconIntermediate}`}>
            <ion-icon name="ellipse"></ion-icon>
            <ion-icon name="ellipse"></ion-icon>
          </span>
        )}
        {student.level === "advanced" && (
          <span className={`${styles.icon} ${styles.iconAdvanced}`}>
            <ion-icon name="ellipse"></ion-icon>
            <ion-icon name="ellipse"></ion-icon>
            <ion-icon name="ellipse"></ion-icon>
          </span>
        )}
      </span>

      <button id={student.id} onClick={onHandleDelete}>
        Remove Student
      </button>
    </div>
  );
}

export { Student };
