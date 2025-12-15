const Header = () => {
    return (
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-surface-light/90 dark:bg-background-dark/90 px-6 py-3 backdrop-blur">
        <div className="flex items-center gap-4 max-w-lg w-full">
          <input
            type="text"
            placeholder="Search pages, students..."
            className="w-full rounded-lg bg-slate-50 dark:bg-surface-dark border-slate-200 dark:border-slate-700 text-sm px-4 py-2 focus:ring-primary"
          />
        </div>
  
        <div className="flex items-center gap-4">
          <button className="h-9 w-9 flex items-center justify-center rounded-lg border bg-white dark:bg-surface-dark">
            <span className="material-symbols-outlined">notifications</span>
          </button>
  
          <div className="flex items-center gap-3">
            <div className="text-right hidden md:block">
              <p className="text-sm font-semibold">Administrator</p>
              <p className="text-xs text-text-secondary">IT Dept.</p>
            </div>
            <div className="h-9 w-9 rounded-full bg-slate-300" />
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  