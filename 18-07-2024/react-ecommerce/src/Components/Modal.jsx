import { createPortal } from "react-dom";

function Modal({ isOpen, onClose, children }) {
  return createPortal(
    <>
      {isOpen && (
        <div className="w-full h-full fixed top-0 left-0 z-50 flex items-center justify-center bg-slate-500/30 backdrop-blur-sm ">
          <div className="w-64 p-16 bg-white flex justify-center z-50">
            {children}
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </>,
    document.body
  );
}

export default Modal;
