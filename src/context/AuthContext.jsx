import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

// STATIC ADMIN CREDENTIALS
const ADMIN_EMAIL = "admin@chetanacollege.edu";
const ADMIN_PASSWORD = "admin123";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const login = (email, password) => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setUser({ email });
      setError("");
      return true; // success
    } else {
      setError("Invalid email or password");
      return false; // failure
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
