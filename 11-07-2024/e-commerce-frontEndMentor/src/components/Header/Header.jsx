import styles from "./Header.module.css";
import classNames from "classnames";
import { Logo } from "../Icons/Logo";
import { IconCart } from "../Icons/IconCart";

function Header() {
  return (
    <div className={classNames(styles.header)}>
      {" "}
      <div className={classNames(styles.logoContainer)}>
        <Logo />
        <nav>
          <ul>
            <li>Collection</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className={classNames(styles.navbarIcons)}>
        <IconCart />
        <img src="public/images/image-avatar.png" alt="" />
      </div>
    </div>
  );
}

export { Header };
