import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <aside className="hidden lg:flex w-72 flex-col justify-between border-r p-6">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary text-white">
            <span className="material-symbols-outlined">school</span>
          </div>
          <h1 className="text-xl font-bold">Chetana CMS</h1>
        </div>

        <nav className="space-y-1">
          <NavItem to="/dashboard" icon="dashboard" label="Dashboard" />
          <NavItem to="/contact-queries" icon="groups" label="Contact Queries" />
        </nav>
      </div>

      <div className="pt-4 border-t">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-red-50 text-red-600"
        >
          <span className="material-symbols-outlined">logout</span>
          Logout
        </button>
      </div>
    </aside>
  );
};

const NavItem = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition
       ${isActive
        ? "bg-primary/10 text-primary"
        : "text-slate-600 hover:bg-slate-50 hover:text-primary"}`
    }
  >
    <span className="material-symbols-outlined">{icon}</span>
    {label}
  </NavLink>
);

export default Sidebar;
