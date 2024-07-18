import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <img
        onClick={() => setIsModalOpen(true)}
        src={product.thumbnail}
        alt=""
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>{product.description}</p>
        <Link to={`/product/${product.id}`}>{product.title}</Link>
      </Modal>
    </div>
  );
}

export default ProductCard;
