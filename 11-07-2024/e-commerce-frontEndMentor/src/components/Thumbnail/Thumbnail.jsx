import classNames from "classnames";
import styles from "./Thumbnail.module.css";

function Thumbnail({ isSelected = false, thumbNail = "" }) {
  return (
    <div
      className={classNames(styles.thumbnail, isSelected && styles.selected)}
      // onClick={handleSelect}
    >
      <img src={thumbNail} />
      <div className={classNames(isSelected && styles.over)}></div>
    </div>
  );
}

export { Thumbnail };
