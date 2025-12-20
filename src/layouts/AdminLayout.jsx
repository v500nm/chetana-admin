import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AdminLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen w-screen flex bg-gray-100 dark:bg-gray-900">

      {/* SIDEBAR */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* RIGHT SECTION */}
      <div className="flex flex-col flex-1 min-w-0">

        {/* HEADER */}
        <Header setIsOpen={setIsOpen} />

        {/* CONTENT */}
        <main className="flex-1 w-full overflow-y-auto p-4 sm:p-6">
          {children}
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;
