import { useState } from "react";
import data from "../data/notices.json";
import Badge from "../components/Badge";
import Modal from "../components/Modal";

const Notices = () => {
  const [notices, setNotices] = useState(data.notices);
  const [openModal, setOpenModal] = useState(false);
  const [editing, setEditing] = useState(null);

  const emptyForm = {
    title: "",
    category: "",
    status: "Draft",
  };

  const [form, setForm] = useState(emptyForm);

  const openAdd = () => {
    setForm(emptyForm);
    setEditing(null);
    setOpenModal(true);
  };

  const openEdit = (notice) => {
    setForm(notice);
    setEditing(notice.id);
    setOpenModal(true);
  };

  const saveNotice = () => {
    if (editing) {
      setNotices((prev) =>
        prev.map((n) => (n.id === editing ? { ...form } : n))
      );
    } else {
      setNotices((prev) => [
        ...prev,
        {
          ...form,
          id: Date.now(),
          date: new Date().toISOString().slice(0, 10),
        },
      ]);
    }
    setOpenModal(false);
  };

  return (
    <div className="space-y-6 text-gray-900 dark:text-gray-100">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Notices</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Manage college notices
          </p>
        </div>

        <button
          onClick={openAdd}
          className="h-10 px-4 bg-blue-600 text-white rounded-lg"
        >
          + Add Notice
        </button>
      </div>

      {/* TABLE */}
      <div
        className="
          bg-white dark:bg-gray-800
          border border-gray-200 dark:border-gray-700
          rounded-xl overflow-hidden
        "
      >
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-700 border-b dark:border-gray-600">
            <tr>
              <th className="px-6 py-3 text-left">Title</th>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {notices.map((n) => (
              <tr
                key={n.id}
                className="
                  border-b border-gray-200 dark:border-gray-700
                  hover:bg-gray-50 dark:hover:bg-gray-700
                "
              >
                <td className="px-6 py-4 font-medium">
                  {n.title}
                </td>

                <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                  {n.category}
                </td>

                <td className="px-6 py-4">
                  {n.date}
                </td>

                <td className="px-6 py-4">
                  <Badge status={n.status} />
                </td>

                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => openEdit(n)}
                    className="text-blue-600 dark:text-blue-400 text-xs"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {openModal && (
        <Modal
          title={editing ? "Edit Notice" : "Add Notice"}
          onClose={() => setOpenModal(false)}
        >
          <div className="space-y-4">

            <input
              placeholder="Notice Title"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              className="
                w-full p-2 rounded-lg border
                bg-white dark:bg-gray-900
                border-gray-300 dark:border-gray-700
                text-gray-900 dark:text-gray-100
              "
            />

            <input
              placeholder="Category"
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
              className="
                w-full p-2 rounded-lg border
                bg-white dark:bg-gray-900
                border-gray-300 dark:border-gray-700
                text-gray-900 dark:text-gray-100
              "
            />

            <select
              value={form.status}
              onChange={(e) =>
                setForm({ ...form, status: e.target.value })
              }
              className="
                w-full p-2 rounded-lg border
                bg-white dark:bg-gray-900
                border-gray-300 dark:border-gray-700
                text-gray-900 dark:text-gray-100
              "
            >
              <option>Draft</option>
              <option>Published</option>
            </select>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpenModal(false)}
                className="
                  px-4 h-9 rounded-lg border
                  border-gray-300 dark:border-gray-700
                "
              >
                Cancel
              </button>

              <button
                onClick={saveNotice}
                className="px-4 h-9 bg-blue-600 text-white rounded-lg"
              >
                Save
              </button>
            </div>

          </div>
        </Modal>
      )}
    </div>
  );
};

export default Notices;
