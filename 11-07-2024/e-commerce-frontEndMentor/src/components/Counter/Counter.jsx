import { IconMinus } from "../Icons/IconMinus";
import { IconPlus } from "../Icons/IconPlus";
import styles from "./Counter.module.css";
import classNames from "classnames";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className={classNames(styles.counter)}>
      <button onClick={() => counter && setCounter(counter - 1)}>
        <IconMinus />
      </button>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        <IconPlus />
      </button>
    </div>
  );
}

export { Counter };
