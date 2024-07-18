import { useState, useEffect } from "react";
import ProductCard from "../Components/ProductCard";

function Homepage() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const products = await fetch("https://dummyjson.com/products");
    const data = await products.json();
    setProducts(data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Homepage;
