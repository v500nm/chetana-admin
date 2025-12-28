const Section = ({ title, children }) => (
  <div
    className="
      bg-white dark:bg-gray-800
      border border-gray-200 dark:border-gray-700
      rounded-xl p-6 space-y-4
      text-gray-900 dark:text-gray-100
    "
  >
    <h3 className="font-semibold text-lg">
      {title}
    </h3>
    {children}
  </div>
);

export default Section;
