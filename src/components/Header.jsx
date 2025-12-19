import Breadcrumb from "./Breadcrumb";
import { useAuth } from "../context/AuthContext";

const Header = ({ setIsOpen, breadcrumbItems = [] }) => {
  const { logout } = useAuth();

  return (
    <header className="sticky top-0 z-30 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden text-blue-700"
            onClick={() => setIsOpen(true)}
          >
            <span className="material-symbols-outlined text-2xl">
              menu
            </span>
          </button>

          <div className="hidden sm:flex flex-col">
            <h1 className="font-semibold text-gray-800">Admin Dashboard</h1>
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="material-symbols-outlined text-blue-700">
            notifications
          </span>

          <span className="material-symbols-outlined text-blue-700">
            account_circle
          </span>

          <button
            onClick={logout}
            className="hidden sm:block text-sm font-medium text-blue-700"
          >
            Logout
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
