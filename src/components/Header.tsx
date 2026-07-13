"use client";

import { Breadcrumb } from "./Breadcrumb";

export function Header() {
  return (
    <header className="flex justify-between items-center h-16 ml-sidebar-width px-gutter w-[calc(100%-theme(spacing.sidebar-width))] bg-surface-bright border-b border-outline-variant sticky top-0 z-40 shadow-sm">
      <div className="flex items-center gap-6">
        <Breadcrumb />
        
        <div className="relative w-80 hidden md:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
          <input 
            className="w-full bg-surface-container border-none rounded-lg pl-10 pr-4 py-2 text-body-md focus:ring-2 focus:ring-secondary/20 focus:bg-surface-container-high transition-all outline-none" 
            placeholder="Search students, faculty, courses..." 
            type="text"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-all text-on-surface-variant">
          <span className="material-symbols-outlined">help</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-all text-on-surface-variant relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
        </button>
        <div className="h-8 w-[1px] bg-outline-variant mx-2"></div>
        
        <div className="flex items-center gap-3 cursor-pointer group hover:bg-surface-container-high p-1 rounded-lg transition-all">
          <div className="text-right hidden sm:block">
            <p className="font-label-md text-label-md text-on-surface leading-none">Admin User</p>
            <p className="text-[11px] text-on-surface-variant">Super Admin</p>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-secondary/20 overflow-hidden bg-primary flex items-center justify-center text-white font-bold">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
