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
    <div className="px-8 py-8">

      {/* ── Section Header ── */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-slate-800 font-bold text-lg">Project Overview</h2>
          <p className="text-slate-400 text-sm mt-0.5">Live metrics across all active sites</p>
        </div>
        <button className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold text-sm px-4 py-2 rounded-lg transition-colors shadow-sm shadow-amber-200">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
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

      {/* ── Lower Section ── */}
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
    </div>
  );
}