// app/equipment/page.tsx

const equipment = [
    { id: "EQ-001", name: "Tower Crane",        site: "Lakeview Tower",   status: "In Use"  },
    { id: "EQ-002", name: "Excavator CAT 320",  site: "Metro Bridge Ph2", status: "In Use"  },
    { id: "EQ-003", name: "Concrete Mixer",     site: "Riverside Mall",   status: "Ready"   },
    { id: "EQ-004", name: "Bulldozer D6",       site: "Yard — Bay 3",     status: "Repair"  },
    { id: "EQ-005", name: "Mobile Generator",   site: "Harbor Offices",   status: "In Use"  },
    { id: "EQ-006", name: "Hydraulic Lift",     site: "Greenfield Depot", status: "Ready"   },
    { id: "EQ-007", name: "Compactor Roller",   site: "Yard — Bay 1",     status: "Repair"  },
    { id: "EQ-008", name: "Telescopic Handler", site: "Lakeview Tower",   status: "Ready"   },
  ];
  
  type Status = "Ready" | "In Use" | "Repair";
  
  const statusConfig: Record<Status, { badge: string; dot: string; label: string }> = {
    Ready:    { badge: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200", dot: "bg-emerald-500", label: "Ready"  },
    "In Use": { badge: "bg-blue-50   text-blue-700    ring-1 ring-blue-200",    dot: "bg-blue-500",    label: "In Use" },
    Repair:   { badge: "bg-red-50    text-red-600     ring-1 ring-red-200",     dot: "bg-red-500",     label: "Repair" },
  };
  
  const statusCounts = {
    Ready:    equipment.filter((e) => e.status === "Ready").length,
    "In Use": equipment.filter((e) => e.status === "In Use").length,
    Repair:   equipment.filter((e) => e.status === "Repair").length,
  };
  
  export default function EquipmentPage() {
    return (
      <div className="px-8 py-8">
  
        {/* ── Page Header ── */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-slate-800 font-extrabold text-2xl tracking-tight">
              Equipment Tracker
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Monitor and manage all construction equipment across every site.
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
              Add Equipment
            </button>
          </div>
        </div>
  
        {/* ── Summary Stat Cards ── */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {(["Ready", "In Use", "Repair"] as Status[]).map((s) => (
            <div key={s} className="bg-white rounded-xl border border-slate-200 shadow-sm px-5 py-4 flex items-center gap-4">
              <span className={`w-3 h-3 rounded-full flex-shrink-0 ${statusConfig[s].dot}`} />
              <div>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest">{s}</p>
                <p className="text-slate-800 text-2xl font-extrabold tracking-tight">{statusCounts[s]}</p>
              </div>
            </div>
          ))}
        </div>
  
        {/* ── Table Card ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
  
          {/* Toolbar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <p className="text-slate-500 text-sm">
              Showing <span className="font-semibold text-slate-700">{equipment.length}</span> assets
            </p>
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search equipment..."
                className="pl-8 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent w-52 transition"
              />
            </div>
          </div>
  
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  {["ID", "Equipment Name", "Current Site", "Maintenance Status"].map((col) => (
                    <th
                      key={col}
                      className="text-left text-xs font-semibold text-slate-500 uppercase tracking-widest px-6 py-3 whitespace-nowrap"
                    >
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
                {equipment.map((item) => {
                  const cfg = statusConfig[item.status as Status];
                  return (
                    <tr key={item.id} className="hover:bg-slate-50/70 transition-colors group">
  
                      {/* ID */}
                      <td className="px-6 py-4">
                        <span className="font-mono text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded-md">
                          {item.id}
                        </span>
                      </td>
  
                      {/* Equipment Name */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 flex-shrink-0">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="1" y="3" width="15" height="13" rx="1" />
                              <path d="M16 8h4l3 5v3h-7V8z" />
                              <circle cx="5.5" cy="18.5" r="2.5" />
                              <circle cx="18.5" cy="18.5" r="2.5" />
                            </svg>
                          </div>
                          <span className="font-semibold text-slate-700">{item.name}</span>
                        </div>
                      </td>
  
                      {/* Current Site */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-slate-500">
                          <svg className="text-slate-300 flex-shrink-0" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          {item.site}
                        </div>
                      </td>
  
                      {/* Status Badge */}
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${cfg.badge}`}>
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${cfg.dot}`} />
                          {cfg.label}
                        </span>
                      </td>
  
                      {/* Row Action */}
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
                  );
                })}
              </tbody>
            </table>
          </div>
  
          {/* Pagination Footer */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-slate-50/50">
            <p className="text-slate-400 text-xs">Page 1 of 1</p>
            <div className="flex items-center gap-1">
              <button disabled className="w-7 h-7 rounded-md border border-slate-200 bg-white text-slate-400 flex items-center justify-center disabled:opacity-40">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button className="w-7 h-7 rounded-md bg-amber-400 text-slate-900 font-bold text-xs flex items-center justify-center shadow-sm">
                1
              </button>
              <button disabled className="w-7 h-7 rounded-md border border-slate-200 bg-white text-slate-400 flex items-center justify-center disabled:opacity-40">
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