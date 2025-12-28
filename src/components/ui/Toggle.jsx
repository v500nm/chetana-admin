const Toggle = ({ label, value, onChange }) => {
  return (
    <label className="flex items-center justify-between cursor-pointer">
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {label}
      </span>

      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="
          h-5 w-5
          accent-blue-600
          bg-white dark:bg-gray-800
          border-gray-300 dark:border-gray-600
        "
      />
    </label>
  );
};

export default Toggle;
