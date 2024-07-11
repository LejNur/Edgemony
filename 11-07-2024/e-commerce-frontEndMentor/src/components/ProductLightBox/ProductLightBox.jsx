import { ShowBox } from "../ShowBox/ShowBox";
import { Thumbnail } from "../Thumbnail/Thumbnail";
import classNames from "classnames";
import styles from "./ProductLightBox.module.css";
import { useState } from "react";

const products = [
  {
    id: self.crypto.randomUUID(),
    product: "../public/images/image-product-1.jpg",
    thumbNail: "../public/images/image-product-1-thumbnail.jpg",
  },
  {
    id: self.crypto.randomUUID(),
    product: "../public/images/image-product-2.jpg",
    thumbNail: "../public/images/image-product-2-thumbnail.jpg",
  },
  {
    id: self.crypto.randomUUID(),
    product: "../public/images/image-product-3.jpg",
    thumbNail: "../public/images/image-product-3-thumbnail.jpg",
  },
  {
    id: self.crypto.randomUUID(),
    product: "../public/images/image-product-4.jpg",
    thumbNail: "../public/images/image-product-4-thumbnail.jpg",
  },
];

function ProductLightBox() {
  const initialValue = products[0];
  const [selectedProduct, setSelectedProduct] = useState(initialValue);

  function handleClick(id) {
    const product = products.find((product) => product.id === id);
    setSelectedProduct(product);
  }

  return (
    <div className={classNames(styles["product-lightbox"])}>
      <ShowBox imgUrl={selectedProduct.product} />
      <ul className={classNames(styles["thumbnail-list"])}>
        {products.map((product) => {
          return (
            <li key={product.id} onClick={() => handleClick(product.id)}>
              <Thumbnail
                isSelected={product.id === selectedProduct.id}
                thumbNail={product.thumbNail}
                // handleSelect={() => handleClick(product.id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { ProductLightBox };
