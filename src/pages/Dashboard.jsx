import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import dashboardData from "../data/dashboard.json";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  const { title, subtitle, stats, recentActivity } = dashboardData;

  return (
    <AdminLayout>
      <div className="w-full min-w-0 space-y-8">

        {/* HEADER */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {subtitle}
          </p>
        </div>

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(loading ? Array.from({ length: stats.length }) : stats).map(
            (item, i) => (
              <div
                key={i}
                className="
                  rounded-xl p-5 border
                  bg-white dark:bg-gray-800
                  border-gray-200 dark:border-gray-700
                "
              >
                {loading ? (
                  <Skeleton />
                ) : (
                  <>
                    <span
                      className={`material-symbols-outlined text-3xl ${item.color}`}
                    >
                      {item.icon}
                    </span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      {item.label}
                    </p>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                      {item.value}
                    </h3>
                  </>
                )}
              </div>
            )
          )}
        </div>

        {/* RECENT ACTIVITY */}
        <div
          className="
            rounded-xl border p-6
            bg-white dark:bg-gray-800
            border-gray-200 dark:border-gray-700
          "
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
            {recentActivity.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {recentActivity.description}
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
