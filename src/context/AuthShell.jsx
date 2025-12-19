import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";

import Dashboard from "../pages/Dashboard";
import ContactQueries from "../pages/ContactQueries";

/* -------- Route → Breadcrumb Map (single source of truth) -------- */
const breadcrumbMap = {
  "/dashboard": [{ label: "Dashboard" }],
  "/contact-queries": [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Contact Queries" },
  ],
};

const AuthShell = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) return <Navigate to="/" replace />;

  const breadcrumbs = breadcrumbMap[location.pathname] || [];

  return (
    <div className="flex h-screen w-full overflow-hidden">

      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">

        <Header />

        {/* Breadcrumb */}
        <div className="border-b border-slate-200 dark:border-slate-800 px-6 py-3">
          <Breadcrumb items={breadcrumbs} />
        </div>

        {/* Routed Pages */}
        <main className="flex-1 overflow-y-auto px-6 py-8">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact-queries" element={<ContactQueries />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>

      </div>
    </div>
  );
};

export default AuthShell;
