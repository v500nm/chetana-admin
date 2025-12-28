const Select = ({ label, value, options, onChange }) => {
  return (
    <div>
      <label className="text-sm text-gray-600 dark:text-gray-400">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          mt-1 w-full h-10 px-3 rounded-lg
          border border-gray-300 dark:border-gray-600
          bg-white dark:bg-gray-900
          text-gray-900 dark:text-gray-100
        "
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
