import { createContext, useContext, useState, useEffect } from "react";
import settingsData from "../data/settings.json";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("admin-settings");
    return saved ? JSON.parse(saved) : settingsData;
  });

  useEffect(() => {
    localStorage.setItem("admin-settings", JSON.stringify(settings));
  }, [settings]);

  const updateSetting = (section, key, value) => {
    setSettings((prev) => ({
      ...prev,
      [section]: { ...prev[section], [key]: value }
    }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
