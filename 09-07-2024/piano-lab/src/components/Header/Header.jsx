import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <nav>
        <span>
          <ion-icon name="musical-notes"></ion-icon>
          <h1>PianoLab</h1>
        </span>
        <div className={styles.navbarLinks}>
          <a href="#">Home</a>
          <a href="#">Exercises</a>
          <a href="#">Scores</a>
          <a href="#">Lesson review</a>
        </div>
      </nav>
    </div>
  );
}

export { Header };
