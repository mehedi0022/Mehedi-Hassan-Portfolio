import { useEffect } from "react";

const Popup = ({ isOpen, onClose, children }) => {
  // 1. Handle closing with the "Escape" key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Optional: Prevent background scrolling
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // 2. Handle clicking the backdrop to close
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Content */}
      <div className="bg-[#16161D] border border-gray-700/50 rounded-xl shadow-2xl w-full max-w-3xl relative flex flex-col max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button - More subtle and positioned correctly */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          aria-label="Close modal"
        >
          {/* SVG Icon instead of text "x" */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content Wrapper */}
        <div className="p-6 md:p-10">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
