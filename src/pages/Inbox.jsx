import { useState } from "react";
import data from "../data/messages.json";
import Badge from "../components/Badge";
import MessageModal from "../components/MessageModal";

const Inbox = () => {
  const [activeTab, setActiveTab] = useState("inbox"); // inbox | outbox
  const [messages, setMessages] = useState(data.inbox);
  const [activeMsg, setActiveMsg] = useState(null);

  /* SWITCH TAB */
  const switchTab = (tab) => {
    setActiveTab(tab);
    setMessages(tab === "inbox" ? data.inbox : data.outbox);
    setActiveMsg(null);
  };

  /* MARK READ (ONLY INBOX) */
  const markRead = (id) => {
    setMessages((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, status: "Read" } : m
      )
    );
  };

  return (
    <div className="space-y-6 text-gray-900 dark:text-gray-100">

      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-bold">
          {activeTab === "inbox" ? "Inbox" : "Outbox"}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {activeTab === "inbox"
            ? "Messages received from students and visitors"
            : "Messages sent by admin"}
        </p>
      </div>

      {/* TABS */}
      <div className="flex gap-2 border-b border-gray-200 dark:border-gray-700">
        <TabButton
          active={activeTab === "inbox"}
          onClick={() => switchTab("inbox")}
          label="Inbox"
        />
        <TabButton
          active={activeTab === "outbox"}
          onClick={() => switchTab("outbox")}
          label="Outbox"
        />
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
              <th className="px-6 py-3 text-left">
                {activeTab === "inbox" ? "Sender" : "Receiver"}
              </th>
              <th className="px-6 py-3 text-left">Subject</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {messages.map((m) => (
              <tr
                key={m.id}
                className={`
                  border-b border-gray-200 dark:border-gray-700
                  hover:bg-gray-50 dark:hover:bg-gray-700
                  ${
                    m.status === "Unread"
                      ? "bg-blue-50 dark:bg-blue-900/20"
                      : ""
                  }
                `}
              >
                <td className="px-6 py-4">
                  <div className="font-medium">{m.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {activeTab === "inbox" ? m.from : m.to}
                  </div>
                </td>

                <td className="px-6 py-4">{m.subject}</td>

                <td className="px-6 py-4">{m.date}</td>

                <td className="px-6 py-4">
                  <Badge status={m.status} />
                </td>

                <td className="px-6 py-4 text-right space-x-2">
                  {activeTab === "inbox" && m.status === "Unread" && (
                    <button
                      onClick={() => markRead(m.id)}
                      className="text-xs text-blue-600 dark:text-blue-400"
                    >
                      Mark Read
                    </button>
                  )}
                  <button
                    onClick={() => setActiveMsg(m)}
                    className="text-xs text-green-600 dark:text-green-400"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {messages.length === 0 && (
          <div className="p-6 text-center text-gray-500 dark:text-gray-400">
            No messages found
          </div>
        )}
      </div>

      {/* MESSAGE MODAL */}
      {activeMsg && (
        <MessageModal
          message={activeMsg}
          onClose={() => setActiveMsg(null)}
        />
      )}
    </div>
  );
};

export default Inbox;

/* ---------- TAB BUTTON ---------- */
const TabButton = ({ active, label, onClick }) => (
  <button
    onClick={onClick}
    className={`
      px-4 py-2 text-sm font-medium border-b-2 transition
      ${
        active
          ? "border-blue-600 text-blue-600 dark:text-blue-400"
          : "border-transparent text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
      }
    `}
  >
    {label}
  </button>
);
