"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/", icon: "dashboard" },
    { name: "Student Management", href: "/users", icon: "group" },
    { name: "Course Oversight", href: "/cms", icon: "school" },
    { name: "Notices & News", href: "/notices", icon: "campaign" },
  ];

  return (
    <aside className="w-sidebar-width h-screen fixed left-0 top-0 bg-primary flex flex-col py-stack-lg shadow-sm z-50">
      <div className="px-6 mb-10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
        </div>
        <div>
          <h1 className="font-headline-lg text-headline-lg font-bold text-surface-container-lowest leading-none">Chetana CMS</h1>
          <p className="font-label-md text-label-md text-on-primary-container">Admin Portal</p>
        </div>
      </div>
      
      <nav className="flex-grow">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href} 
              className={`flex items-center gap-3 px-6 py-3 transition-colors duration-200 ${
                isActive 
                  ? "bg-secondary text-on-secondary border-l-4 border-secondary-container" 
                  : "text-secondary-fixed-dim hover:text-white hover:bg-primary-container border-l-4 border-transparent"
              }`}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                {item.icon}
              </span>
              <span className="font-label-md text-label-md">{item.name}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="px-6 mt-auto">
        <div className="bg-primary-container/30 rounded-xl p-4 border border-outline-variant/10">
          <p className="font-label-md text-label-md text-on-primary-container">System Status</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-white text-[12px] font-medium uppercase tracking-wider">All Systems Operational</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
