import { IconMinus } from "../Icons/IconMinus";
import { IconPlus } from "../Icons/IconPlus";
import styles from "./Counter.module.css";
import classNames from "classnames";

function Counter() {
  return (
    <div className={classNames(styles.counter)}>
      <button>
        <IconMinus />
      </button>
      <div>0</div>
      <button>
        <IconPlus />
      </button>
    </div>
  );
}

export { Counter };
