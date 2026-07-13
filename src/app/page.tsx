import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      {/* WELCOME SECTION */}
      <section className="mb-stack-lg">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="font-display text-display text-primary">System Overview</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">Academic Year 2023-24 | Semester 1</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-outline text-secondary font-label-md rounded-lg hover:bg-secondary/5 transition-all">
              Download Report
            </button>
            <button className="px-4 py-2 bg-secondary text-white font-label-md rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">add</span>
              New Entry
            </button>
          </div>
        </div>
      </section>

      {/* METRIC CARDS GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-stack-lg">
        {/* Total Students */}
        <div className="bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-1 hover:border-secondary cursor-pointer">
          <div className="flex justify-between items-start mb-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
            </div>
            <span className="text-green-600 text-[12px] font-bold bg-green-100 px-2 py-0.5 rounded-full">+4.2%</span>
          </div>
          <p className="text-on-surface-variant font-label-md uppercase tracking-wider text-[11px]">Total Students</p>
          <p className="font-display text-headline-lg font-bold text-primary mt-1">2,450</p>
          <p className="text-[12px] text-on-surface-variant mt-2">Active enrollment this term</p>
        </div>

        {/* Active Courses */}
        <div className="bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-1 hover:border-secondary cursor-pointer">
          <div className="flex justify-between items-start mb-3">
            <div className="w-10 h-10 rounded-lg bg-tertiary-fixed-dim/20 flex items-center justify-center text-tertiary-container">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
            </div>
            <span className="text-on-surface-variant text-[12px] font-bold bg-surface-container px-2 py-0.5 rounded-full">Static</span>
          </div>
          <p className="text-on-surface-variant font-label-md uppercase tracking-wider text-[11px]">Active Courses</p>
          <p className="font-display text-headline-lg font-bold text-primary mt-1">124</p>
          <p className="text-[12px] text-on-surface-variant mt-2">Across 12 departments</p>
        </div>

        {/* Faculty Members */}
        <div className="bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-1 hover:border-secondary cursor-pointer">
          <div className="flex justify-between items-start mb-3">
            <div className="w-10 h-10 rounded-lg bg-on-primary-container/10 flex items-center justify-center text-on-primary-fixed-variant">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>badge</span>
            </div>
            <span className="text-red-600 text-[12px] font-bold bg-red-100 px-2 py-0.5 rounded-full">-2</span>
          </div>
          <p className="text-on-surface-variant font-label-md uppercase tracking-wider text-[11px]">Faculty Members</p>
          <p className="font-display text-headline-lg font-bold text-primary mt-1">85</p>
          <p className="text-[12px] text-on-surface-variant mt-2">Including visiting lecturers</p>
        </div>

        {/* Attendance Rate */}
        <div className="bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-1 hover:border-secondary cursor-pointer">
          <div className="flex justify-between items-start mb-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-700">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
            </div>
            <span className="text-green-600 text-[12px] font-bold bg-green-100 px-2 py-0.5 rounded-full">+1.5%</span>
          </div>
          <p className="text-on-surface-variant font-label-md uppercase tracking-wider text-[11px]">Attendance Rate</p>
          <p className="font-display text-headline-lg font-bold text-primary mt-1">94%</p>
          <p className="text-[12px] text-on-surface-variant mt-2">Daily average for current month</p>
        </div>
      </section>

      {/* BENTO GRID FOR CHARTS AND FEEDS */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* ENROLLMENT TRENDS CHART */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-lg shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h4 className="font-headline-md text-headline-md text-primary">Student Enrollment Trends</h4>
              <p className="text-body-md text-on-surface-variant">New enrollments tracked over the last 6 months</p>
            </div>
            <select className="bg-surface-container border border-outline-variant rounded-lg text-label-md px-3 py-1.5 focus:ring-secondary/20 outline-none">
              <option>Last 6 Months</option>
              <option>Last Year</option>
              <option>Academic Session</option>
            </select>
          </div>
          <div className="relative h-64 w-full bg-slate-50/50 rounded-lg overflow-hidden flex items-end px-4 pb-2">
            <svg className="w-full h-full" viewBox="0 0 800 240">
              <line stroke="#e2e8f0" strokeWidth="1" x1="0" x2="800" y1="40" y2="40"></line>
              <line stroke="#e2e8f0" strokeWidth="1" x1="0" x2="800" y1="100" y2="100"></line>
              <line stroke="#e2e8f0" strokeWidth="1" x1="0" x2="800" y1="160" y2="160"></line>
              <line stroke="#e2e8f0" strokeWidth="1" x1="0" x2="800" y1="220" y2="220"></line>
              <path d="M 0 180 L 160 140 L 320 160 L 480 80 L 640 60 L 800 40" fill="none" stroke="#2b6cb0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
              <path d="M 0 180 L 160 140 L 320 160 L 480 80 L 640 60 L 800 40 V 240 H 0 Z" fill="url(#chartGradient)" opacity="0.1"></path>
              <circle cx="0" cy="180" fill="#2b6cb0" r="5"></circle>
              <circle cx="160" cy="140" fill="#2b6cb0" r="5"></circle>
              <circle cx="320" cy="160" fill="#2b6cb0" r="5"></circle>
              <circle cx="480" cy="80" fill="#2b6cb0" r="5"></circle>
              <circle cx="640" cy="60" fill="#2b6cb0" r="5"></circle>
              <circle cx="800" cy="40" fill="#2b6cb0" r="5"></circle>
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#2b6cb0"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex justify-between px-2 mt-4 text-[12px] font-medium text-on-surface-variant">
            <span>JAN</span>
            <span>FEB</span>
            <span>MAR</span>
            <span>APR</span>
            <span>MAY</span>
            <span>JUN</span>
          </div>
        </div>

        {/* QUICK ACTIONS PANEL */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
          <div className="bg-primary text-white p-stack-lg rounded-xl shadow-sm h-full">
            <h4 className="font-headline-md text-headline-md mb-4">Quick Actions</h4>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/users" className="bg-white/10 hover:bg-white/20 transition-all rounded-lg p-4 flex flex-col items-center gap-2 text-center border border-white/10 cursor-pointer">
                <span className="material-symbols-outlined text-[32px]">person_add</span>
                <span className="font-label-md text-label-md">Add Student</span>
              </Link>
              <Link href="/courses" className="bg-white/10 hover:bg-white/20 transition-all rounded-lg p-4 flex flex-col items-center gap-2 text-center border border-white/10 cursor-pointer">
                <span className="material-symbols-outlined text-[32px]">library_add</span>
                <span className="font-label-md text-label-md">New Course</span>
              </Link>
              <button className="bg-white/10 hover:bg-white/20 transition-all rounded-lg p-4 flex flex-col items-center gap-2 text-center border border-white/10 cursor-pointer">
                <span className="material-symbols-outlined text-[32px]">history_edu</span>
                <span className="font-label-md text-label-md">Faculty Assign</span>
              </button>
              <button className="bg-white/10 hover:bg-white/20 transition-all rounded-lg p-4 flex flex-col items-center gap-2 text-center border border-white/10 cursor-pointer">
                <span className="material-symbols-outlined text-[32px]">summarize</span>
                <span className="font-label-md text-label-md">Batch Reports</span>
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="font-label-md text-label-md mb-2 opacity-70">Shortcuts</p>
              <ul className="space-y-3">
                <li className="flex items-center justify-between text-[13px] hover:translate-x-1 transition-transform cursor-pointer">
                  <span>Exam Schedule Builder</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </li>
                <li className="flex items-center justify-between text-[13px] hover:translate-x-1 transition-transform cursor-pointer">
                  <span>Fee Structure Portal</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* RECENT ACTIVITY FEED */}
        <div className="col-span-12 lg:col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-lg shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-headline-md text-headline-md text-primary">Recent Activity</h4>
            <button className="text-secondary font-label-md hover:underline">View All Activity</button>
          </div>
          <div className="space-y-0">
            {/* Activity 1 */}
            <div className="flex items-start gap-4 p-4 border-b border-surface-container last:border-0 hover:bg-surface-container-low transition-colors rounded-lg group">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <span className="material-symbols-outlined">person_add</span>
              </div>
              <div className="flex-grow">
                <p className="text-body-md font-medium text-on-surface">New student registered: <span className="text-secondary font-bold">Aryan Sharma</span></p>
                <p className="text-[12px] text-on-surface-variant">B.Tech CS | Application ID #CS-2024-9012</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[12px] text-on-surface-variant">2 mins ago</span>
              </div>
            </div>
            
            {/* Activity 2 */}
            <div className="flex items-start gap-4 p-4 border-b border-surface-container last:border-0 hover:bg-surface-container-low transition-colors rounded-lg group">
              <div className="w-10 h-10 rounded-full bg-error-container/20 flex items-center justify-center text-error shrink-0">
                <span className="material-symbols-outlined">priority_high</span>
              </div>
              <div className="flex-grow">
                <p className="text-body-md font-medium text-on-surface">Grade submission deadline approaching</p>
                <p className="text-[12px] text-on-surface-variant">Faculty are reminded to upload Semester 1 internals by tomorrow midnight.</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[12px] text-on-surface-variant">45 mins ago</span>
              </div>
            </div>
            
            {/* Activity 3 */}
            <div className="flex items-start gap-4 p-4 border-b border-surface-container last:border-0 hover:bg-surface-container-low transition-colors rounded-lg group">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div className="flex-grow">
                <p className="text-body-md font-medium text-on-surface">New course approved: <span className="text-secondary font-bold">Applied Robotics AI-102</span></p>
                <p className="text-[12px] text-on-surface-variant">Assigned to Dr. Mallick | Department of Automation</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[12px] text-on-surface-variant">3 hours ago</span>
              </div>
            </div>
            
            {/* Activity 4 */}
            <div className="flex items-start gap-4 p-4 border-b border-surface-container last:border-0 hover:bg-surface-container-low transition-colors rounded-lg group">
              <div className="w-10 h-10 rounded-full bg-on-primary-fixed-variant/10 flex items-center justify-center text-on-primary-fixed-variant shrink-0">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <div className="flex-grow">
                <p className="text-body-md font-medium text-on-surface">Batch scholarship disbursement processed</p>
                <p className="text-[12px] text-on-surface-variant">Total: ₹1,20,000 for 15 students in Merit List 1.</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[12px] text-on-surface-variant">5 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* MOBILE FAB */}
      <button className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-secondary text-white rounded-full shadow-lg flex items-center justify-center z-50">
        <span className="material-symbols-outlined">add</span>
      </button>
    </>
  );
}
