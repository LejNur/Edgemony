import styles from "./Button.module.css";
import classNames from "classnames";

function Button({ children, text = "Add to cart" }) {
  return (
    <button className={classNames(styles.button)}>
      {children}
      {text}
    </button>
  );
}

export { Button };
