import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Header = ({ setIsOpen }) => {
  const { logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [openProfile, setOpenProfile] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="h-16 w-full px-4 sm:px-6 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-3 flex-1">
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-blue-700 dark:text-blue-400"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>

          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              search
            </span>
            <input
              placeholder="Search anything..."
              className="w-full h-10 pl-10 pr-3 rounded-lg
                bg-white dark:bg-gray-800
                text-gray-900 dark:text-gray-100
                border border-gray-300 dark:border-gray-600
                focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2">
          <IconButton
            icon={theme === "dark" ? "light_mode" : "dark_mode"}
            onClick={toggleTheme}
          />

          <IconButton icon="chat" />

          <div className="relative">
            <IconButton icon="notifications" />
            <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full" />
          </div>

          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setOpenProfile((v) => !v)}
              className="h-9 w-9 flex items-center justify-center
               rounded-full hover:bg-blue-50 dark:hover:bg-gray-700
               text-blue-700 dark:text-blue-400"
            >
              <span className="material-symbols-outlined text-[26px]">
                account_circle
              </span>
            </button>

            {openProfile && (
              <div
                className="
        absolute right-0 mt-2 w-48
        z-50
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        rounded-xl shadow-lg
        py-1
      "
              >
                <NavLink
                  to="/dashboard"
                  onClick={() => setOpenProfile(false)}
                  className="
          flex items-center gap-2 px-4 py-2 text-sm
          text-gray-700 dark:text-gray-200
          hover:bg-gray-100 dark:hover:bg-gray-700
        "
                >
                  <span className="material-symbols-outlined text-[18px]">
                    dashboard
                  </span>
                  Dashboard
                </NavLink>

                <NavLink
                  to="/profile"
                  onClick={() => setOpenProfile(false)}
                  className="
          flex items-center gap-2 px-4 py-2 text-sm
          text-gray-700 dark:text-gray-200
          hover:bg-gray-100 dark:hover:bg-gray-700
        "
                >
                  <span className="material-symbols-outlined text-[18px]">
                    person
                  </span>
                  Profile
                </NavLink>

                <div className="my-1 border-t border-gray-200 dark:border-gray-700" />

                <button
                  onClick={() => {
                    logout();
                    navigate("/"); // 👈 redirect after logout
                  }}
                  className="
    flex w-full items-center gap-2 px-4 py-2 text-sm
    text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30
  "
                >
                  <span className="material-symbols-outlined text-[18px]">
                    logout
                  </span>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

const IconButton = ({ icon, onClick }) => (
  <button
    onClick={onClick}
    className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-700 dark:text-blue-400"
  >
    <span className="material-symbols-outlined text-[22px]">{icon}</span>
  </button>
);
