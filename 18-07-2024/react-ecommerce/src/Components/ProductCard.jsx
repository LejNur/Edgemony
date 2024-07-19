import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="border-b-2 border-cyan-600 shadow-sm w-fit">
      <h2 className="text-slate-700 text-2xl font-thin">{product.title}</h2>
      <img
        className="cursor-pointer"
        onClick={() => setIsModalOpen(true)}
        src={product.thumbnail}
      />
      <span className="font-bold text-slate-700">Price: {product.price}$</span>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <img src={product.thumbnail} alt="product" />
        <h4 className="font-bold text-slate-600 text-xl">{product.title}</h4>
        <p className="text-center">{product.description}</p>
        <span className="font-bold">{product.price}$</span>
        <Link
          className="w-2/5 flex justify-center border border-cyan-600 rounded-md p-2  text-slate-600 hover:bg-cyan-600 hover:font-medium hover:text-slate-200 transition ease-in-out"
          to={`/product/${product.id}`}
        >
          See More
        </Link>
      </Modal>
    </div>
  );
}

export default ProductCard;
