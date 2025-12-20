import { NavLink } from "react-router-dom";
import { useState } from "react";
import menuData from "../data/sidebarMenu.json";

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
          dark:from-gray-900 dark:to-gray-900
          text-white transition-all duration-300
          ${collapsed ? "w-20" : "w-64"}
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* LOGO */}
        <div className="h-16 px-4 flex items-center justify-between">
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
        <nav className="px-3 py-4 text-sm space-y-1 overflow-y-auto h-[calc(100vh-64px)]">
          {menuData.map((item) =>
            item.children ? (
              <Dropdown
                key={item.label}
                icon={item.icon}
                label={item.label}
                collapsed={collapsed}
                open={openMenu === item.key}
                onClick={() =>
                  setOpenMenu(openMenu === item.key ? "" : item.key)
                }
              >
                {item.children.map((child) =>
                  child.children ? (
                    <NestedDropdown
                      key={child.label}
                      label={child.label}
                      open={openSubMenu === child.key}
                      onClick={() =>
                        setOpenSubMenu(
                          openSubMenu === child.key ? "" : child.key
                        )
                      }
                    >
                      {child.children.map((sub) => (
                        <SubLink
                          key={sub.label}
                          to={sub.path}
                          label={sub.label}
                        />
                      ))}
                    </NestedDropdown>
                  ) : (
                    <SubLink
                      key={child.label}
                      to={child.path}
                      label={child.label}
                    />
                  )
                )}
              </Dropdown>
            ) : (
              <SidebarLink
                key={item.label}
                to={item.path}
                icon={item.icon}
                label={item.label}
                collapsed={collapsed}
              />
            )
          )}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

/* -------- SUB COMPONENTS -------- */

const SidebarLink = ({ to, icon, label, collapsed }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2.5 rounded-md transition
       ${
         isActive
           ? "bg-white/20 dark:bg-white/10 font-semibold"
           : "hover:bg-white/10 dark:hover:bg-white/5"
       }`
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
      className="w-full flex items-center justify-between px-4 py-2.5 rounded-md hover:bg-white/10 dark:hover:bg-white/5"
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
      className="w-full flex items-center justify-between px-3 py-2 rounded-md text-xs hover:bg-white/10 dark:hover:bg-white/5"
    >
      <span>{label}</span>
      <span className="material-symbols-outlined text-sm">
        {open ? "chevron_left" : "chevron_right"}
      </span>
    </button>

    {open && (
      <div className="ml-4 mt-1 space-y-1 border-l border-white/20 dark:border-white/10 pl-3">
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
       ${
         isActive
           ? "bg-white/20 dark:bg-white/10"
           : "hover:bg-white/10 dark:hover:bg-white/5"
       }`
    }
  >
    {label}
  </NavLink>
);
