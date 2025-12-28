const MessageModal = ({ message, onClose }) => (
  <div className="fixed inset-0 bg-black/40 dark:bg-black/70 z-50 flex items-center justify-center">
    
    <div
      className="
        bg-white dark:bg-gray-800
        text-gray-900 dark:text-gray-100
        rounded-xl w-full max-w-lg p-6 space-y-4
        border border-gray-200 dark:border-gray-700
      "
    >

      <h3 className="text-lg font-bold">
        {message.subject}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        <strong>From:</strong>{" "}
        {message.name} ({message.email || message.from})
      </p>

      <div
        className="
          border border-gray-200 dark:border-gray-700
          rounded-lg p-4 text-sm
          bg-gray-50 dark:bg-gray-900
          text-gray-700 dark:text-gray-300
        "
      >
        {message.message}
      </div>

      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="
            px-4 h-9 rounded-lg border
            border-gray-300 dark:border-gray-600
            hover:bg-gray-50 dark:hover:bg-gray-700
          "
        >
          Close
        </button>
      </div>

    </div>
  </div>
);

export default MessageModal;
