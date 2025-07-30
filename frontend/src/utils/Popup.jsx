const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex px-5 items-center justify-center z-50">
      <div className="bg-[#16161D] px-6 py-10 rounded-lg shadow-lg w-full mx-5 md:w-3xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl md:text-3xl bg-red-500 hover:bg-amber-800 w-8 h-8 md:w-10 md:h-10 rounded-full text-white cursor-pointer"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
