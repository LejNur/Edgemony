import styles from "./Layout.module.css";
import classNames from "classnames";
import { Header } from "../Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={classNames(styles.mainContainer)}>{children}</div>
    </>
  );
}

export { Layout };
