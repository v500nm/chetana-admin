import React, { useEffect, useState } from "react";

const ContactQueries = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto space-y-8">

      {/* ================= PAGE HEADER ================= */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">Contact Queries</h2>
          <p className="text-text-secondary max-w-2xl mt-1">
            View, manage and respond to messages received via the website.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="h-10 px-4 rounded-lg border bg-white shadow-sm">
            Export
          </button>
          <button className="h-10 px-4 rounded-lg bg-primary text-white font-semibold">
            Compose
          </button>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => <StatCardSkeleton key={i} />)
          : (
            <>
              <StatCard title="Unread Messages" value="12" icon="mark_email_unread" />
              <StatCard title="Total Queries" value="1,248" icon="inbox" />
              <StatCard title="Response Rate" value="98%" icon="check_circle" />
              <StatCard title="Avg. Response Time" value="4h 20m" icon="timer" />
            </>
          )}
      </div>

      {/* ================= TABLE ================= */}
      <div className="rounded-xl bg-surface-light dark:bg-surface-dark border shadow-sm overflow-hidden">
        {loading ? <TableSkeleton /> : <ContactTable />}
      </div>
    </div>
  );
};

export default ContactQueries;

/* ================= COMPONENTS ================= */

const StatCard = ({ title, value, icon }) => (
  <div className="rounded-xl p-5 border bg-surface-light dark:bg-surface-dark shadow-sm">
    <div className="flex justify-between">
      <p className="text-sm text-text-secondary">{title}</p>
      <span className="material-symbols-outlined text-primary">{icon}</span>
    </div>
    <h3 className="text-2xl font-bold mt-3">{value}</h3>
  </div>
);

const StatCardSkeleton = () => (
  <div className="rounded-xl p-5 border bg-surface-light dark:bg-surface-dark shadow-sm">
    <Skeleton className="h-4 w-32 mb-4" />
    <Skeleton className="h-8 w-20" />
  </div>
);

/* ================= TABLE ================= */

const ContactTable = () => (
  <>
    <div className="p-4 border-b flex flex-col sm:flex-row gap-4 justify-between">
      <input
        className="w-full sm:max-w-md rounded-lg bg-slate-100 px-4 py-2"
        placeholder="Search queries..."
      />
      <select className="h-10 px-3 rounded-lg border bg-white">
        <option>Status: All</option>
        <option>New</option>
        <option>Replied</option>
        <option>Archived</option>
      </select>
    </div>

    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-50 border-b">
          <tr>
            <th className="px-6 py-4 text-left">Sender</th>
            <th className="px-6 py-4 text-left">Subject</th>
            <th className="px-6 py-4 text-left">Date</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          <TableRow name="John Doe" subject="Admission Inquiry" status="New" />
          <TableRow name="Anita Sharma" subject="Syllabus Update" status="Replied" />
          <TableRow name="Rajesh Kumar" subject="Library Access" status="Seen" />
        </tbody>
      </table>
    </div>
  </>
);

const TableRow = ({ name, subject, status }) => (
  <tr className="border-b hover:bg-slate-50">
    <td className="px-6 py-4 font-medium">{name}</td>
    <td className="px-6 py-4 text-text-secondary">{subject}</td>
    <td className="px-6 py-4 text-text-secondary">Oct 24, 2023</td>
    <td className="px-6 py-4">
      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
        {status}
      </span>
    </td>
    <td className="px-6 py-4 text-right">•••</td>
  </tr>
);

/* ================= SKELETON ================= */

const TableSkeleton = () => (
  <>
    <div className="p-4 border-b flex gap-4">
      <Skeleton className="h-10 w-64" />
      <Skeleton className="h-10 w-40" />
    </div>

    <div className="divide-y">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="grid grid-cols-5 gap-4 px-6 py-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 col-span-2" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
      ))}
    </div>
  </>
);

const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-slate-200 dark:bg-slate-700 rounded ${className}`} />
);
