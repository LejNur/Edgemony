import styles from "./ShowBox.module.css";
import classNames from "classnames";

function ShowBox({ imgUrl }) {
  return (
    <div className={classNames(styles.showBox)}>
      <img src={imgUrl} alt="" />
    </div>
  );
}

export { ShowBox };
