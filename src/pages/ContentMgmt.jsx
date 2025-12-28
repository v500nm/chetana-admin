import { useState } from "react";
import data from "../data/content.json";
import Badge from "../components/Badge";
import Modal from "../components/Modal";

const ContentMgmt = () => {
  const [pages, setPages] = useState(data.pages);
  const [openModal, setOpenModal] = useState(false);
  const [editing, setEditing] = useState(null);

  const emptyForm = {
    title: "",
    slug: "",
    status: "Draft",
  };

  const [form, setForm] = useState(emptyForm);

  const openAdd = () => {
    setForm(emptyForm);
    setEditing(null);
    setOpenModal(true);
  };

  const openEdit = (page) => {
    setForm(page);
    setEditing(page.id);
    setOpenModal(true);
  };

  const savePage = () => {
    if (editing) {
      setPages((prev) =>
        prev.map((p) => (p.id === editing ? { ...form } : p))
      );
    } else {
      setPages((prev) => [
        ...prev,
        {
          ...form,
          id: Date.now(),
          lastUpdated: new Date().toISOString().slice(0, 10),
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
          <h2 className="text-2xl font-bold">Content Management</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Manage website pages
          </p>
        </div>

        <button
          onClick={openAdd}
          className="h-10 px-4 bg-blue-600 text-white rounded-lg"
        >
          + Create Page
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
              <th className="px-6 py-3 text-left">Slug</th>
              <th className="px-6 py-3 text-left">Updated</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {pages.map((p) => (
              <tr
                key={p.id}
                className="
                  border-b border-gray-200 dark:border-gray-700
                  hover:bg-gray-50 dark:hover:bg-gray-700
                "
              >
                <td className="px-6 py-4 font-medium">
                  {p.title}
                </td>

                <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                  {p.slug}
                </td>

                <td className="px-6 py-4">
                  {p.lastUpdated}
                </td>

                <td className="px-6 py-4">
                  <Badge status={p.status} />
                </td>

                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => openEdit(p)}
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
          title={editing ? "Edit Page" : "Create Page"}
          onClose={() => setOpenModal(false)}
        >
          <div className="space-y-4">

            <input
              placeholder="Page Title"
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
              placeholder="Slug (/about)"
              value={form.slug}
              onChange={(e) =>
                setForm({ ...form, slug: e.target.value })
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
                onClick={savePage}
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

export default ContentMgmt;
