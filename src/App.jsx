import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Login from "./pages/Login";
import AuthShell from "./context/AuthShell";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Login />} />

          {/* Admin */}
          <Route path="/*" element={<AuthShell />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
