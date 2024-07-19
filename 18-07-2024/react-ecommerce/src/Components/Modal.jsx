import { createPortal } from "react-dom";

function Modal({ isOpen, onClose, children }) {
  return createPortal(
    <>
      {isOpen && (
        <div className="w-full h-full fixed top-0 left-0 z-50 flex items-center justify-center bg-slate-500/30 backdrop-blur-sm">
          <div className="w-3/5 p-16 bg-slate-200 relative rounded-sm flex flex-col gap-4 items-center">
            {children}
            <button
              className="absolute top-2 right-4 cursor-pointer"
              onClick={onClose}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>,
    document.body
  );
}

export default Modal;
