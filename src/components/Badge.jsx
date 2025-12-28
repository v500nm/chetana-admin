const Badge = ({ status }) => {
  const map = {
    New: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    Seen: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
    Replied: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs ${map[status]}`}>
      {status}
    </span>
  );
};

export default Badge;