import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AdminLayout = ({ children, breadcrumbItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* SIDEBAR */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <Header
          setIsOpen={setIsOpen}
          breadcrumbItems={breadcrumbItems}
        />

        {/* PAGE CONTENT */}
        <main className="flex-1 p-4 sm:p-6">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;
