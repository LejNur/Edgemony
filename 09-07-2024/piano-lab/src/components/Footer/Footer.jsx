import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.socialIcons}>
        <span>
          <ion-icon name="logo-facebook"></ion-icon>
        </span>
        <span>
          <ion-icon name="logo-instagram"></ion-icon>
        </span>
        <span>
          <ion-icon name="logo-linkedin"></ion-icon>
        </span>
      </div>
      <p>© Copyright LejlaNur 2024</p>
    </div>
  );
}

export { Footer };
