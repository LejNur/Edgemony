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
    <div className="bg-slate-200 w-full mx-auto py-6 px-12 grid grid-cols-3 gap-y-14 justify-items-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Homepage;
