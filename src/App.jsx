import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ContactQueries from "./pages/ContactQueries";
import Inbox from "./pages/Inbox";
import AdminLayout from "./layouts/AdminLayout";
import { AuthProvider } from "./context/AuthContext";
import Notices from "./pages/Notices";
import ContentMgmt from "./pages/ContentMgmt";
import Settings from "./pages/Settings";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* PUBLIC */}
          <Route path="/" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <div className="flex">
                {" "}
                <Dashboard />{" "}
              </div>
            }
          />

          <Route
            path="/contact-queries"
            element={
              <AdminLayout>
                <ContactQueries />
              </AdminLayout>
            }
          />

          <Route
            path="/inbox"
            element={
              <AdminLayout>
                <Inbox />
              </AdminLayout>
            }
          />

          <Route
            path="/notices"
            element={
              <AdminLayout>
                <Notices />
              </AdminLayout>
            }
          />

          <Route
            path="/content-mgmt"
            element={
              <AdminLayout>
                <ContentMgmt />
              </AdminLayout>
            }
          />

          <Route
            path="/settings"
            element={
              <AdminLayout>
                <Settings />
              </AdminLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
