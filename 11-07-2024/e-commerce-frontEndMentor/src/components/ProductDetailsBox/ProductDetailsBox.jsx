import styles from "./ProductDetailsBox.module.css";
import classNames from "classnames";
import { useState } from "react";
import { Button } from "../Button/Button";
import { IconCart } from "../Icons/IconCart";
import { Counter } from "../Counter/Counter";

function ProductDetailsBox() {
  return (
    <div className={classNames(styles.productDetailsBox)}>
      <h4>Sneaker company</h4>
      <h2>Fall Limited Edition Sneakers</h2>
      <p>
        {" "}
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <p>
        {" "}
        <span>$125.00</span>
        <span>50%</span>
      </p>

      <span>$250.00</span>
      <div className={classNames(styles.buttonsContainer)}>
        <Button text={"Add to cart"}>
          <IconCart fill="#000000" />
        </Button>
        <Counter />
      </div>
    </div>
  );
}

export { ProductDetailsBox };
