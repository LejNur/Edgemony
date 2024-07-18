import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  async function getProduct() {
    const product = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await product.json();
    setProduct(data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  console.log(product);
  return <div>This product has an id: {id}</div>;
}

export default ProductDetails;
