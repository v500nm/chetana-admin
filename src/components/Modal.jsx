const Modal = ({ title, children, onClose }) => (
  <div
    className="
      fixed inset-0 z-50
      flex items-center justify-center
      bg-black/40 dark:bg-black/70
    "
  >
    <div
      className="
        w-full max-w-lg p-6 space-y-4 rounded-xl
        bg-white dark:bg-gray-800
        text-gray-900 dark:text-gray-100
        border border-gray-200 dark:border-gray-700
      "
    >
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">
          {title}
        </h3>

        <button
          onClick={onClose}
          className="
            text-gray-500 dark:text-gray-400
            hover:text-gray-700 dark:hover:text-gray-200
          "
        >
          ✕
        </button>
      </div>

      {/* BODY */}
      {children}
    </div>
  </div>
);

export default Modal;
