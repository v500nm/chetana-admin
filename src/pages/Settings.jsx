import { useState } from "react";
import settingsData from "../data/settings.json";
import Section from "../components/ui/Section";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Toggle from "../components/ui/Toggle";

const Settings = () => {
  const [settings, setSettings] = useState(settingsData);

  const update = (section, key, value) => {
    setSettings({
      ...settings,
      [section]: { ...settings[section], [key]: value },
    });
  };

  return (
    <div className="max-w-4xl space-y-8 text-gray-900 dark:text-gray-100">

      {/* PAGE HEADER */}
      <div>
        <h2 className="text-2xl font-bold">Settings</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Manage system preferences and admin configuration
        </p>
      </div>

      {/* GENERAL */}
      <Section title="General Settings">
        <Input
          label="College Name"
          value={settings.general.collegeName}
          onChange={(v) => update("general", "collegeName", v)}
        />
        <Input
          label="Tagline"
          value={settings.general.tagline}
          onChange={(v) => update("general", "tagline", v)}
        />
        <Input
          label="Official Email"
          value={settings.general.email}
          onChange={(v) => update("general", "email", v)}
        />
        <Input
          label="Phone"
          value={settings.general.phone}
          onChange={(v) => update("general", "phone", v)}
        />
      </Section>

      {/* APPEARANCE */}
      <Section title="Appearance">
        <Select
          label="Theme"
          value={settings.appearance.theme}
          options={["light", "dark", "system"]}
          onChange={(v) => update("appearance", "theme", v)}
        />

        <Select
          label="Primary Color"
          value={settings.appearance.primaryColor}
          options={["blue", "green", "red"]}
          onChange={(v) =>
            update("appearance", "primaryColor", v)
          }
        />

        <Toggle
          label="Sidebar Collapsed by Default"
          value={settings.appearance.sidebarCollapsed}
          onChange={(v) =>
            update("appearance", "sidebarCollapsed", v)
          }
        />
      </Section>

      {/* NOTIFICATIONS */}
      <Section title="Notifications">
        <Toggle
          label="Email Notifications"
          value={settings.notifications.email}
          onChange={(v) =>
            update("notifications", "email", v)
          }
        />
        <Toggle
          label="Dashboard Alerts"
          value={settings.notifications.dashboard}
          onChange={(v) =>
            update("notifications", "dashboard", v)
          }
        />
        <Toggle
          label="Contact Query Alerts"
          value={settings.notifications.contactQueries}
          onChange={(v) =>
            update("notifications", "contactQueries", v)
          }
        />
      </Section>

      {/* SECURITY */}
      <Section title="Security">
        <Select
          label="Auto Logout (minutes)"
          value={settings.security.autoLogout}
          options={[15, 30, 60]}
          onChange={(v) =>
            update("security", "autoLogout", v)
          }
        />
      </Section>

      {/* SAVE */}
      <div className="flex justify-end">
        <button className="px-6 h-10 bg-blue-600 text-white rounded-lg">
          Save Changes
        </button>
      </div>

    </div>
  );
};

export default Settings;
