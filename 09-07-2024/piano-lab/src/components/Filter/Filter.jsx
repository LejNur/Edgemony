import styles from "./Filter.module.css";

function Filter(props) {
  const { onHandleFilter } = props;
  return (
    <div className={styles.filterContainer}>
      <button name="beginner" onClick={onHandleFilter}>
        Beginner Level
      </button>
      <button name="intermediate" onClick={onHandleFilter}>
        Intermediate Level
      </button>
      <button name="advanced" onClick={onHandleFilter}>
        Advanced Level
      </button>
    </div>
  );
}

export { Filter };
