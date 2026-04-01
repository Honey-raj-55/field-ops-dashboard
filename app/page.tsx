'use client';

import { useEffect, useMemo, useState } from 'react';

type Status = 'Ready' | 'In Use' | 'Repair';

type EquipmentItem = {
  id: string;
  name: string;
  site: string;
  status: Status;
};

export default function Home() {
  const [equipment, setEquipment] = useState<EquipmentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        setLoading(true);

        const res = await fetch('/api/equipment');

        if (!res.ok) {
          throw new Error('Failed to fetch equipment');
        }

        const result = await res.json();
        setEquipment(result.data);
      } catch (error) {
        console.error('Error fetching equipment:', error);
        setEquipment([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEquipment();
  }, []);

  const totalAssets = equipment.length;
  const equipmentInRepair = equipment.filter(
    (item) => item.status === 'Repair'
  ).length;

  const metricCards = useMemo(
    () => [
      {
        title: 'Active Projects',
        value: '12',
        subtitle: '3 nearing deadline',
        trend: '+2 this month',
        trendUp: true,
        accent: 'border-blue-500',
        iconBg: 'bg-blue-50',
        iconColor: 'text-blue-600',
        icon: (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ),
      },
      {
        title: 'Pending Approvals',
        value: '7',
        subtitle: '2 marked urgent',
        trend: '-4 since last week',
        trendUp: false,
        accent: 'border-amber-500',
        iconBg: 'bg-amber-50',
        iconColor: 'text-amber-600',
        icon: (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        ),
      },
      {
        title: 'Total Assets',
        value: loading ? 'Fetching...' : String(totalAssets),
        subtitle: loading
          ? 'Syncing equipment inventory'
          : `${equipmentInRepair} in repair`,
        trend: loading ? 'Fetching...' : `${totalAssets} tracked assets`,
        trendUp: true,
        accent: 'border-emerald-500',
        iconBg: 'bg-emerald-50',
        iconColor: 'text-emerald-600',
        icon: (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="1" y="3" width="15" height="13" rx="1" />
            <path d="M16 8h4l3 5v3h-7V8z" />
            <circle cx="5.5" cy="18.5" r="2.5" />
            <circle cx="18.5" cy="18.5" r="2.5" />
          </svg>
        ),
      },
      {
        title: 'Equipment in Repair',
        value: loading ? 'Fetching...' : String(equipmentInRepair),
        subtitle: loading
          ? 'Checking maintenance queue'
          : `${totalAssets - equipmentInRepair} operational`,
        trend: loading ? 'Fetching...' : 'Maintenance watch',
        trendUp: false,
        accent: 'border-red-500',
        iconBg: 'bg-red-50',
        iconColor: 'text-red-500',
        icon: (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6-2.8 2.8-1.6-1.6a1 1 0 0 0-1.4 0L3 18v3h3l7.5-7.5a1 1 0 0 0 0-1.4l-1.6-1.6 2.8-2.8 1.6 1.6a1 1 0 0 0 1.4 0l1.6-1.6a4 4 0 0 0-5.7-5.7z" />
          </svg>
        ),
      },
    ],
    [loading, totalAssets, equipmentInRepair]
  );

  return (
    <div className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">

      {/* ── Section Header ── */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Project Overview</h2>
          <p className="mt-0.5 text-sm text-slate-400">Live metrics across all active sites</p>
        </div>
        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm shadow-amber-200 transition-colors hover:bg-amber-500 sm:w-auto">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          New Report
        </button>
      </div>

      {/* ── Metric Cards Grid ── */}
      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-6">
        {metricCards.map((card) => (
          <div
            key={card.title}
            className={`rounded-2xl border border-slate-200 border-l-4 ${card.accent} bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-6`}
          >
            <div className="mb-4 flex items-start justify-between sm:mb-5">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  {card.title}
                </p>
                <p className="mt-1 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
                  {card.value}
                </p>
              </div>
              <div className={`ml-3 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl sm:h-11 sm:w-11 ${card.iconBg} ${card.iconColor}`}>
                {card.icon}
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs text-slate-400 sm:text-sm">{card.subtitle}</p>
              <span className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${card.trendUp ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'}`}>
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
      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3">
        {/* Recent Activity */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between sm:mb-5">
            <h3 className="text-sm font-bold text-slate-700">Recent Activity</h3>
            <a href="#" className="text-xs font-semibold text-amber-500 transition-colors hover:text-amber-600">
              View all →
            </a>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {[
              { label: 'Site inspection completed — Block C',      time: '2h ago',    dot: 'bg-emerald-400' },
              { label: 'Equipment request submitted — Crane #4',   time: '5h ago',    dot: 'bg-amber-400'   },
              { label: 'Daily log updated — Tower Foundation',     time: 'Yesterday', dot: 'bg-blue-400'    },
              { label: 'Safety audit flagged — Sector 7',          time: 'Yesterday', dot: 'bg-red-400'     },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className={`h-2.5 w-2.5 flex-shrink-0 rounded-full ${item.dot}`} />
                <p className="flex-1 truncate text-sm text-slate-600">{item.label}</p>
                <span className="flex-shrink-0 text-xs text-slate-400">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Site Status */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-4 flex items-center justify-between sm:mb-5">
            <h3 className="text-sm font-bold text-slate-700">Site Status</h3>
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          </div>
          <div className="space-y-3">
            {[
              { site: 'Lakeview Tower',   status: 'On Track', color: 'text-emerald-600 bg-emerald-50' },
              { site: 'Riverside Mall',   status: 'Delayed',  color: 'text-red-500 bg-red-50'         },
              { site: 'Metro Bridge Ph2', status: 'On Track', color: 'text-emerald-600 bg-emerald-50' },
              { site: 'Harbor Offices',   status: 'Review',   color: 'text-amber-600 bg-amber-50'     },
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-between border-b border-slate-100 py-2 last:border-0">
                <p className="mr-2 truncate text-sm font-medium text-slate-600">{s.site}</p>
                <span className={`flex-shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${s.color}`}>
                  {s.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}