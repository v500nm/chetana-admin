export default function UsersPage() {
  return (
    <div className="flex flex-col h-full">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Student Directory</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Manage enrollments, track academic progress, and faculty assignments.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container-high transition-all">
            <span className="material-symbols-outlined text-[18px]">cloud_download</span>
            Export List
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-on-secondary rounded-lg font-label-md hover:opacity-90 shadow-sm transition-all">
            <span className="material-symbols-outlined text-[18px]">person_add</span>
            Add New Student
          </button>
        </div>
      </div>

      {/* Dashboard Stats Summary (Bento-lite) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-3">
            <span className="material-symbols-outlined text-secondary bg-secondary-fixed p-2 rounded-lg">group</span>
            <span className="text-green-600 font-label-md text-[12px] flex items-center gap-1">+2.4% <span className="material-symbols-outlined text-[14px]">trending_up</span></span>
          </div>
          <p className="font-label-md text-on-surface-variant">Total Students</p>
          <h4 className="font-headline-lg text-headline-lg font-bold text-primary">12,482</h4>
        </div>
        
        <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-3">
            <span className="material-symbols-outlined text-tertiary-container bg-tertiary-fixed p-2 rounded-lg">school</span>
          </div>
          <p className="font-label-md text-on-surface-variant">Graduation Rate</p>
          <h4 className="font-headline-lg text-headline-lg font-bold text-primary">94.2%</h4>
        </div>
        
        <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-3">
            <span className="material-symbols-outlined text-secondary bg-secondary-fixed p-2 rounded-lg">pending_actions</span>
          </div>
          <p className="font-label-md text-on-surface-variant">Pending Approvals</p>
          <h4 className="font-headline-lg text-headline-lg font-bold text-primary">128</h4>
        </div>
        
        <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-3">
            <span className="material-symbols-outlined text-error bg-error-container p-2 rounded-lg">report</span>
          </div>
          <p className="font-label-md text-on-surface-variant">At Risk</p>
          <h4 className="font-headline-lg text-headline-lg font-bold text-primary">14</h4>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm mb-6">
        <div className="p-4 flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[200px] relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">filter_list</span>
            <input className="w-full bg-surface-bright border border-outline-variant rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-secondary/20 outline-none" placeholder="Filter by name or ID..." type="text"/>
          </div>
          <div className="flex items-center gap-3">
            <select className="bg-surface-bright border border-outline-variant rounded-lg px-3 py-2 text-sm font-label-md text-on-surface outline-none focus:ring-2 focus:ring-secondary/20">
              <option>Department: All</option>
              <option>Computer Science</option>
              <option>Business Admin</option>
              <option>Mechanical Engineering</option>
            </select>
            <select className="bg-surface-bright border border-outline-variant rounded-lg px-3 py-2 text-sm font-label-md text-on-surface outline-none focus:ring-2 focus:ring-secondary/20">
              <option>Year: All</option>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>Final Year</option>
            </select>
            <select className="bg-surface-bright border border-outline-variant rounded-lg px-3 py-2 text-sm font-label-md text-on-surface outline-none focus:ring-2 focus:ring-secondary/20">
              <option>Status: All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div className="flex items-center border-l border-outline-variant pl-4 gap-2">
            <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all" title="Bulk Actions">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        </div>
      </div>

      {/* Data Table Card */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden flex-1 flex flex-col min-h-[400px]">
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="sticky top-0 bg-surface-container z-10">
              <tr className="text-on-surface-variant font-label-md text-[12px] uppercase tracking-wider border-b border-outline-variant shadow-sm">
                <th className="px-6 py-4 font-semibold w-12"><input className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox"/></th>
                <th className="px-6 py-4 font-semibold">Student ID</th>
                <th className="px-6 py-4 font-semibold">Full Name</th>
                <th className="px-6 py-4 font-semibold">Department</th>
                <th className="px-6 py-4 font-semibold text-center">Year</th>
                <th className="px-6 py-4 font-semibold text-right">GPA</th>
                <th className="px-6 py-4 font-semibold text-center">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-body-md text-on-surface font-table-data">
              {/* Row 1 */}
              <tr className="hover:bg-surface-container-low transition-colors border-b border-outline-variant group">
                <td className="px-6 py-4"><input className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox"/></td>
                <td className="px-6 py-4 font-medium text-secondary">#2024CS-001</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant flex items-center justify-center font-bold text-[12px]">AS</div>
                    <span>Ananya Sharma</span>
                  </div>
                </td>
                <td className="px-6 py-4">Computer Science</td>
                <td className="px-6 py-4 text-center">3rd Year</td>
                <td className="px-6 py-4 text-right font-semibold">3.88</td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-[11px] font-bold">Active</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 hover:bg-surface-container-high rounded transition-all text-on-surface-variant group-hover:text-secondary">
                    <span className="material-symbols-outlined text-[20px]">edit</span>
                  </button>
                </td>
              </tr>
              
              {/* Row 2 */}
              <tr className="hover:bg-surface-container-low transition-colors border-b border-outline-variant group">
                <td className="px-6 py-4"><input className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox"/></td>
                <td className="px-6 py-4 font-medium text-secondary">#2024ME-142</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-on-primary-container text-white flex items-center justify-center font-bold text-[12px]">RD</div>
                    <span>Rohan Deshmukh</span>
                  </div>
                </td>
                <td className="px-6 py-4">Mechanical Engineering</td>
                <td className="px-6 py-4 text-center">2nd Year</td>
                <td className="px-6 py-4 text-right font-semibold">3.42</td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-[11px] font-bold">Active</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 hover:bg-surface-container-high rounded transition-all text-on-surface-variant group-hover:text-secondary">
                    <span className="material-symbols-outlined text-[20px]">edit</span>
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-surface-container-low transition-colors border-b border-outline-variant group">
                <td className="px-6 py-4"><input className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox"/></td>
                <td className="px-6 py-4 font-medium text-secondary">#2023BA-098</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold text-[12px]">VK</div>
                    <span>Vikram Kulkarni</span>
                  </div>
                </td>
                <td className="px-6 py-4">Business Admin</td>
                <td className="px-6 py-4 text-center">Final Year</td>
                <td className="px-6 py-4 text-right font-semibold">3.15</td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2.5 py-1 rounded-full bg-surface-variant text-on-surface-variant text-[11px] font-bold">Inactive</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 hover:bg-surface-container-high rounded transition-all text-on-surface-variant group-hover:text-secondary">
                    <span className="material-symbols-outlined text-[20px]">edit</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 bg-surface-container border-t border-outline-variant flex items-center justify-between mt-auto">
          <p className="font-label-md text-on-surface-variant">Showing 1-10 of 12,482 students</p>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high disabled:opacity-50">
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-secondary text-on-secondary font-bold text-xs">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-xs font-medium">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-xs font-medium">3</button>
            <span className="px-1 text-on-surface-variant">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-xs font-medium">1248</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
