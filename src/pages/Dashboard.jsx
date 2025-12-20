import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  const stats = [
    { label: "Total Pages", value: "124", icon: "description" },
    { label: "Active Courses", value: "45", icon: "school" },
    { label: "Support Tickets", value: "12", icon: "confirmation_number" },
    { label: "Placement Records", value: "850+", icon: "work" },
  ];

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AdminLayout>
      {/* 🔥 FULL WIDTH FIX */}
      <div className="w-full min-w-0 space-y-8">

        {/* HEADER */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Dashboard Overview
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Operational snapshot of CMS activity
          </p>
        </div>

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(loading ? Array.from({ length: 4 }) : stats).map((s, i) => (
            <div
              key={i}
              className="rounded-xl p-5 border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            >
              {loading ? (
                <Skeleton />
              ) : (
                <>
                  <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-3xl">
                    {s.icon}
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {s.label}
                  </p>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    {s.value}
                  </h3>
                </>
              )}
            </div>
          ))}
        </div>

        {/* ACTIVITY */}
        <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
            Recent Activity
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            CMS logs and admin actions will appear here.
          </p>
        </div>

      </div>
    </AdminLayout>
  );
};

export default Dashboard;

const Skeleton = () => (
  <div className="animate-pulse h-20 bg-gray-200 dark:bg-gray-700 rounded" />
);
