const logs = [
    { date: "Mar 28, 2026", project: "Lakeview Tower",   foreman: "Marcus Webb",  status: "Completed"   },
    { date: "Mar 29, 2026", project: "Riverside Mall",   foreman: "Diana Okafor", status: "Delayed"      },
    { date: "Mar 29, 2026", project: "Metro Bridge Ph2", foreman: "Sam Tillman",  status: "In Progress"  },
    { date: "Mar 30, 2026", project: "Harbor Offices",   foreman: "Priya Nair",   status: "Completed"    },
    { date: "Mar 31, 2026", project: "Greenfield Depot", foreman: "Carlos Vega",  status: "In Progress"  },
  ];
  
  type Status = "Completed" | "In Progress" | "Delayed";
  
  const statusStyles: Record<Status, string> = {
    Completed:    "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    "In Progress":"bg-amber-50  text-amber-700  ring-1 ring-amber-200",
    Delayed:      "bg-red-50    text-red-600    ring-1 ring-red-200",
  };
  
  const statusDot: Record<Status, string> = {
    Completed:    "bg-emerald-500",
    "In Progress":"bg-amber-400",
    Delayed:      "bg-red-500",
  };
  
  export default function DailyLogsPage() {
    return (
      <div className="px-8 py-8">
  
        {/* ── Page Header ── */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-slate-800 font-extrabold text-2xl tracking-tight">Daily Field Logs</h2>
            <p className="text-slate-400 text-sm mt-1">
              Track site activity and foreman reports across all projects.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 font-semibold text-sm px-4 py-2 rounded-lg transition-colors shadow-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Export
            </button>
            <button className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold text-sm px-4 py-2 rounded-lg transition-colors shadow-sm shadow-amber-200">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              New Log
            </button>
          </div>
        </div>
  
        {/* ── Table Card ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
  
          {/* Toolbar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <p className="text-slate-500 text-sm">
              Showing <span className="font-semibold text-slate-700">{logs.length}</span> entries
            </p>
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search logs..."
                className="pl-8 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent w-52 transition"
              />
            </div>
          </div>
  
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  {["Date", "Project Name", "Foreman", "Status"].map((col) => (
                    <th key={col} className="text-left text-xs font-semibold text-slate-500 uppercase tracking-widest px-6 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        {col}
                        <svg className="text-slate-300" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </th>
                  ))}
                  <th className="px-6 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {logs.map((log, index) => (
                  <tr key={index} className="hover:bg-slate-50/70 transition-colors group">
                    <td className="px-6 py-4 text-slate-500 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <svg className="text-slate-300 flex-shrink-0" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        {log.date}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-slate-700">{log.project}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-600 font-bold text-xs flex-shrink-0">
                          {log.foreman.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <span className="text-slate-600">{log.foreman}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyles[log.status as Status]}`}>
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${statusDot[log.status as Status]}`} />
                        {log.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-slate-600 p-1 rounded-md hover:bg-slate-100">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                          <circle cx="5" cy="12" r="1" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          {/* Pagination Footer */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-slate-50/50">
            <p className="text-slate-400 text-xs">Page 1 of 1</p>
            <div className="flex items-center gap-1">
              <button disabled className="w-7 h-7 rounded-md border border-slate-200 bg-white text-slate-400 flex items-center justify-center hover:bg-slate-50 transition-colors disabled:opacity-40">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button className="w-7 h-7 rounded-md bg-amber-400 text-slate-900 font-bold text-xs flex items-center justify-center shadow-sm">1</button>
              <button disabled className="w-7 h-7 rounded-md border border-slate-200 bg-white text-slate-400 flex items-center justify-center hover:bg-slate-50 transition-colors disabled:opacity-40">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }