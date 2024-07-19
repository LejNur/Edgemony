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
    <div className="w-1/2 flex flex-col gap-2 items-start py-8 px-6 text-slate-600">
      <p className="font-extralight">
        This product has an id: <span className="font-semibold">{id}</span>
      </p>
      <p className="font-bold text-3xl">{product && product.title}</p>
      <img className="w-1/2" src={product.thumbnail} alt="" />
      <p>{product.description}</p>
      <span>
        rating: <span className="font-semibold">{product.rating}</span>
      </span>
      <button
        className="border border-cyan-600 rounded-md py-2 px-4 hover:bg-cyan-600 hover:text-slate-200 transition ease-in-out"
        onClick={() => addItem(product)}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductDetails;
