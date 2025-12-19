import React from "react";
import "material-symbols";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(email, password);
    if (success) {
      navigate("/dashboard");
    }
  };
  return (
    <div className="flex h-screen w-full font-display overflow-hidden">
      {/* LEFT PANEL */}
      <div className="hidden lg:flex w-1/2 relative bg-surface-dark">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcfL-BO1Vo43HxEmeCSFOaE2Ct5jdeXrenrGLYM1xNUdEMkTvTdHMQISooUhOMBibLBEe7USrKBDLEokYeYo0OzA6YguuHW9fzGMIHj0FpcWQUvg1LOl0dPnlJiZFeqy5yW7qZcXWb--AAw9Vqp9flc0KOZHC9ZYW0-Y7WQLwy4xGxjCkfv8OR8vq4dpdhe69WQqVFFTtyjNjCLwmJSQTs1qCk-C9cbMVjRLOAyeOPGzfegdluq7-MZuOBEbe5AJyz9FVL4FQGbQ')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/40 mix-blend-multiply" />

        <div className="relative z-10 flex flex-col justify-end p-16 text-white">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-4xl">school</span>
            <h1 className="text-3xl font-bold">Chetana College</h1>
          </div>
          <p className="max-w-md text-lg opacity-90">
            Centralized Content Management System for academic and
            administrative operations.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-24">
        <div className="max-w-[440px] w-full mx-auto space-y-6">
          {/* Header */}
          <div>
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
              <span className="material-symbols-outlined">
                admin_panel_settings
              </span>
            </div>
            <h2 className="text-2xl font-bold">Admin Login</h2>
            <p className="text-text-secondary mt-1">
              Authenticate to access the CMS dashboard.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium">Email Address</label>
              <div className="relative mt-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@chetanacollege.edu"
                  className="w-full h-14 rounded-lg border px-4"
                />

                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary">
                  mail
                </span>
                {error && (
                  <p className="text-sm text-red-600 font-medium">{error}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <label className="text-sm font-medium">Password</label>
                <a className="text-sm text-primary hover:underline">
                  Forgot Password?
                </a>
              </div>
              <div className="relative mt-1">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="admin123"
                  className="w-full h-14 rounded-lg border px-4"
                />

                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary">
                  lock
                </span>
                {error && (
                  <p className="text-sm text-red-600 font-medium">{error}</p>
                )}
              </div>
            </div>

            <button className="w-full h-14 bg-primary text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition">
              Sign In
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>

          {/* Footer */}
          <p className="text-sm text-center text-text-secondary pt-6 border-t">
            Trouble logging in?{" "}
            <span className="font-medium text-text-main cursor-pointer">
              Contact IT Support
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
