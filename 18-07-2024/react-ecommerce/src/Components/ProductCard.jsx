import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <img
        onClick={() => setIsModalOpen(true)}
        src={product.images.at(0)}
        alt=""
      />
      {/* <h2>{product.title}</h2>
      <p>{product.description}</p> */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>{product.description}</p>
        <Link to={`/product/${product.id}`}>{product.title}</Link>
      </Modal>
    </div>
  );
}

export default ProductCard;
