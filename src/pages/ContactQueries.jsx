import React, { useEffect, useState } from "react";
import data from "../data/contactQueries.json";

const PAGE_SIZE = 5;

const ContactQueries = () => {
  const [queries, setQueries] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [page, setPage] = useState(1);
  const [activeQuery, setActiveQuery] = useState(null);

  useEffect(() => {
    setQueries(data.queries);
  }, []);

  const filtered = queries.filter((q) => {
    const matchSearch =
      q.name.toLowerCase().includes(search.toLowerCase()) ||
      q.subject.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status === "All" || q.status === status;
    return matchSearch && matchStatus;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  const updateStatus = (id, newStatus) => {
    setQueries((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, status: newStatus } : q
      )
    );
  };

  return (
    <div className="w-full space-y-6 text-gray-900 dark:text-gray-100">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Contact Queries</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Manage website contact form submissions
          </p>
        </div>
      </div>

      {/* FILTER */}
      <div className="flex gap-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="
            h-10 px-4 rounded-lg border w-full
            bg-white dark:bg-gray-800
            border-gray-200 dark:border-gray-700
          "
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="
            h-10 px-3 rounded-lg border
            bg-white dark:bg-gray-800
            border-gray-200 dark:border-gray-700
          "
        >
          <option>All</option>
          <option>New</option>
          <option>Seen</option>
          <option>Replied</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        rounded-xl overflow-hidden
      ">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-700 border-b">
            <tr>
              <th className="px-6 py-3 text-left">Sender</th>
              <th className="px-6 py-3 text-left">Subject</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginated.map((q) => (
              <tr
                key={q.id}
                className="border-b hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4 font-medium">{q.name}</td>
                <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                  {q.subject}
                </td>
                <td className="px-6 py-4">{q.date}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={q.status} />
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => setActiveQuery(q)}
                    className="text-green-600 text-xs"
                  >
                    Reply
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ContactQueries;

/* STATUS BADGE */
const StatusBadge = ({ status }) => {
  const styles = {
    New: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    Seen: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
    Replied: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs ${styles[status]}`}>
      {status}
    </span>
  );
};
