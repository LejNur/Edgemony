import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Providers/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addItem } = useContext(CartContext);

  async function getProduct() {
    const product = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await product.json();
    setProduct(data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <p>This product has an id: {id}</p>
      <p>{product && product.title}</p>
      <button onClick={() => addItem(product)}>Add to cart</button>
    </div>
  );
}

export default ProductDetails;
