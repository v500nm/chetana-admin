import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);

  const stats = [
    { label: "Total Pages", value: "124", icon: "description" },
    { label: "Active Courses", value: "45", icon: "school" },
    { label: "Support Tickets", value: "12", icon: "confirmation_number" },
    { label: "Placement Records", value: "850+", icon: "work" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-8">

      {/* ================= HEADER ================= */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Dashboard Overview</h2>
          <p className="text-sm text-text-secondary mt-1">
            Operational snapshot of CMS activity
          </p>
        </div>

        {loading ? (
          <Skeleton className="h-10 w-40" />
        ) : (
          <button className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold shadow">
            + Create Content
          </button>
        )}
      </div>

      {/* ================= KPI ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-xl p-5 border">
                <Skeleton className="h-6 w-6 mb-4" />
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-8 w-16" />
              </div>
            ))
          : stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-5 border bg-surface-light dark:bg-surface-dark shadow-sm"
              >
                <span className="material-symbols-outlined text-primary mb-3 block">
                  {s.icon}
                </span>
                <p className="text-sm text-text-secondary">{s.label}</p>
                <h3 className="text-3xl font-bold mt-1">{s.value}</h3>
              </div>
            ))}
      </div>

      {/* ================= ACTIVITY ================= */}
      <div className="rounded-xl border p-6 bg-surface-light dark:bg-surface-dark">
        {loading ? (
          <>
            <Skeleton className="h-5 w-48 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </>
        ) : (
          <>
            <h3 className="text-lg font-bold mb-2">Recent Activity</h3>
            <p className="text-sm text-text-secondary">
              CMS logs, admin actions, and audit trails will appear here.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

/* ================= SKELETON ================= */

const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-slate-200 dark:bg-slate-700 rounded ${className}`} />
);
