const SidebarIcon = ({ children }: { children: React.ReactNode }) => (
  <span className="mr-3 flex-shrink-0">{children}</span>
);

const navItems = [
  {
    label: "Dashboard",
    active: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    label: "Daily Logs",
    active: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    label: "Equipment",
    active: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      </svg>
    ),
  },
  {
    label: "Settings",
    active: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

const metricCards = [
  {
    title: "Active Projects",
    value: "12",
    subtitle: "3 nearing deadline",
    trend: "+2 this month",
    trendUp: true,
    accent: "border-blue-500",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Pending Approvals",
    value: "7",
    subtitle: "2 marked urgent",
    trend: "-4 since last week",
    trendUp: false,
    accent: "border-amber-500",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    title: "Equipment on Site",
    value: "34",
    subtitle: "5 under maintenance",
    trend: "+6 deployed today",
    trendUp: true,
    accent: "border-emerald-500",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex h-screen bg-slate-100 font-sans overflow-hidden">

      {/* ── Sidebar ── */}
      <aside className="w-64 flex-shrink-0 bg-slate-900 flex flex-col h-full shadow-xl">

        {/* Logo / Brand */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-700/60">
          <div className="w-8 h-8 rounded-md bg-amber-400 flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <div>
            <p className="text-white font-bold text-sm tracking-wide leading-none">ConstructIQ</p>
            <p className="text-slate-400 text-xs mt-0.5">Management Suite</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest px-3 mb-3">Main Menu</p>
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 group ${
                item.active
                  ? "bg-amber-400 text-slate-900 shadow-md shadow-amber-400/20"
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
              }`}
            >
              <SidebarIcon>{item.icon}</SidebarIcon>
              {item.label}
              {item.active && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-slate-900 opacity-40" />
              )}
            </a>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="px-4 py-4 border-t border-slate-700/60">
          <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 to-orange-500 flex items-center justify-center text-slate-900 font-bold text-xs flex-shrink-0">
              HR
            </div>
            <div className="min-w-0">
              <p className="text-slate-200 text-xs font-semibold truncate">Honey Raj</p>
              <p className="text-slate-500 text-xs truncate">Site Manager</p>
            </div>
            <svg className="ml-auto text-slate-500 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />
            </svg>
          </div>
        </div>
      </aside>

      {/* ── Main Panel ── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* ── Header ── */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between flex-shrink-0 shadow-sm">
          <div>
            <h1 className="text-slate-800 font-bold text-xl tracking-tight">
              Welcome back, <span className="text-amber-500">Honey Raj</span> 👷
            </h1>
            <p className="text-slate-400 text-sm mt-0.5">
              {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <button className="relative w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center text-slate-500">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>

            {/* Avatar */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-300 to-orange-500 flex items-center justify-center text-slate-900 font-bold text-sm shadow-md">
                HR
              </div>
              <div className="hidden sm:block">
                <p className="text-slate-700 font-semibold text-sm leading-none">Honey Raj</p>
                <p className="text-slate-400 text-xs mt-0.5">Site Manager</p>
              </div>
              <svg className="text-slate-400 group-hover:text-slate-600 transition-colors" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </header>

        {/* ── Main Content ── */}
        <main className="flex-1 overflow-y-auto bg-slate-100 px-8 py-8">

          {/* Section Label */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-slate-800 font-bold text-lg">Project Overview</h2>
              <p className="text-slate-400 text-sm mt-0.5">Live metrics across all active sites</p>
            </div>
            <button className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold text-sm px-4 py-2 rounded-lg transition-colors shadow-sm shadow-amber-200">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              New Report
            </button>
          </div>

          {/* ── Metric Cards Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {metricCards.map((card) => (
              <div
                key={card.title}
                className={`bg-white rounded-2xl shadow-sm border border-slate-200 border-l-4 ${card.accent} p-6 hover:shadow-md transition-shadow duration-200`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest">{card.title}</p>
                    <p className="text-slate-800 text-4xl font-extrabold mt-1 tracking-tight">{card.value}</p>
                  </div>
                  <div className={`w-11 h-11 rounded-xl ${card.iconBg} ${card.iconColor} flex items-center justify-center flex-shrink-0`}>
                    {card.icon}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-slate-400 text-sm">{card.subtitle}</p>
                  <span className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${card.trendUp ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500"}`}>
                    {card.trendUp ? (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 15 12 9 6 15" />
                      </svg>
                    ) : (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    )}
                    {card.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ── Placeholder Lower Section ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Recent Activity */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-slate-700 font-bold text-sm">Recent Activity</h3>
                <a href="#" className="text-amber-500 hover:text-amber-600 text-xs font-semibold transition-colors">View all →</a>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Site inspection completed — Block C", time: "2h ago", dot: "bg-emerald-400" },
                  { label: "Equipment request submitted — Crane #4", time: "5h ago", dot: "bg-amber-400" },
                  { label: "Daily log updated — Tower Foundation", time: "Yesterday", dot: "bg-blue-400" },
                  { label: "Safety audit flagged — Sector 7", time: "Yesterday", dot: "bg-red-400" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${item.dot}`} />
                    <p className="text-slate-600 text-sm flex-1 truncate">{item.label}</p>
                    <span className="text-slate-400 text-xs flex-shrink-0">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Site Status */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-slate-700 font-bold text-sm">Site Status</h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="space-y-3">
                {[
                  { site: "Lakeview Tower", status: "On Track", color: "text-emerald-600 bg-emerald-50" },
                  { site: "Riverside Mall", status: "Delayed", color: "text-red-500 bg-red-50" },
                  { site: "Metro Bridge Ph2", status: "On Track", color: "text-emerald-600 bg-emerald-50" },
                  { site: "Harbor Offices", status: "Review", color: "text-amber-600 bg-amber-50" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                    <p className="text-slate-600 text-sm font-medium truncate mr-2">{s.site}</p>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${s.color}`}>{s.status}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}