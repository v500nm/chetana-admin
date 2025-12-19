import { NavLink } from "react-router-dom";
import { useState } from "react";

/* ================= SUB COMPONENTS ================= */

const SidebarLink = ({ to, icon, label, collapsed }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2.5 rounded-md transition
       ${isActive ? "bg-white/20 font-semibold" : "hover:bg-white/10"}`
    }
  >
    <span className="material-symbols-outlined">{icon}</span>
    {!collapsed && label}
  </NavLink>
);

const Dropdown = ({ icon, label, children, open, onClick, collapsed }) => (
  <div>
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-4 py-2.5 rounded-md hover:bg-white/10"
    >
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined">{icon}</span>
        {!collapsed && label}
      </div>

      {!collapsed && (
        <span className="material-symbols-outlined text-sm">
          {open ? "expand_less" : "expand_more"}
        </span>
      )}
    </button>

    {!collapsed && open && (
      <div className="ml-10 mt-1 space-y-1">{children}</div>
    )}
  </div>
);

const NestedDropdown = ({ label, children, open, onClick }) => (
  <div>
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-3 py-2 rounded-md text-xs hover:bg-white/10"
    >
      <span>{label}</span>
      <span className="material-symbols-outlined text-sm">
        {open ? "chevron_left" : "chevron_right"}
      </span>
    </button>

    {open && (
      <div className="ml-4 mt-1 space-y-1 border-l border-white/20 pl-3">
        {children}
      </div>
    )}
  </div>
);

const SubLink = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block px-3 py-2 rounded-md text-xs transition
       ${isActive ? "bg-white/20" : "hover:bg-white/10"}`
    }
  >
    {label}
  </NavLink>
);

/* ================= MAIN SIDEBAR ================= */

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openMenu, setOpenMenu] = useState("");
  const [openSubMenu, setOpenSubMenu] = useState("");

  return (
    <>
      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed lg:relative z-50 h-screen
          bg-gradient-to-b from-[#0B3C9D] to-[#062B73]
          text-white transition-all duration-300
          ${collapsed ? "w-20" : "w-64"}
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* LOGO */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-white/20">
          {!collapsed && (
            <div>
              <h1 className="text-sm font-bold">CHETANA'S</h1>
              <p className="text-xs opacity-80">CMS Dashboard</p>
            </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:block"
          >
            <span className="material-symbols-outlined">menu_open</span>
          </button>
        </div>

        {/* MENU */}
        <nav className="px-3 py-4 text-sm space-y-1 overflow-y-auto h-[calc(100vh-88px)]">

          <SidebarLink to="/dashboard" icon="dashboard" label="Dashboard" collapsed={collapsed} />

          <Dropdown
            label="Pages"
            icon="description"
            collapsed={collapsed}
            open={openMenu === "pages"}
            onClick={() => {
              setOpenMenu(openMenu === "pages" ? "" : "pages");
              setOpenSubMenu("");
            }}
          >
            <NestedDropdown
              label="Home"
              open={openSubMenu === "home"}
              onClick={() => setOpenSubMenu(openSubMenu === "home" ? "" : "home")}
            >
              <SubLink to="/home/about-chetana" label="About Chetana" />
              <SubLink to="/home/academics" label="Academics" />
              <SubLink to="/home/our-campus" label="Our Campus" />
              <SubLink to="/home/testimonials" label="Testimonials" />
            </NestedDropdown>

            <SubLink to="/pages/about" label="About" />
            <SubLink to="/pages/courses" label="Courses" />
            <SubLink to="/pages/examination" label="Examination" />
            <SubLink to="/pages/admission" label="Admission" />
            <SubLink to="/pages/placement" label="Placement" />
            <SubLink to="/pages/research" label="Research" />
            <SubLink to="/pages/student-corner" label="Student Corner" />
          </Dropdown>

          <SidebarLink to="/notices" icon="campaign" label="Notices" collapsed={collapsed} />
          <SidebarLink to="/inbox" icon="inbox" label="Inbox" collapsed={collapsed} />

        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
