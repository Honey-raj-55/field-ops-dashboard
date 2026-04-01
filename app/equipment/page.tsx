'use client';

import { useEffect, useMemo, useState } from 'react';

type Status = 'Ready' | 'In Use' | 'Repair';

type EquipmentItem = {
  id: string;
  name: string;
  site: string;
  status: Status;
};

const statusConfig: Record<
  Status,
  {
    dot: string;
    badge: string;
  }
> = {
  Ready: {
    dot: 'bg-emerald-500',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  'In Use': {
    dot: 'bg-sky-500',
    badge: 'bg-sky-100 text-sky-700',
  },
  Repair: {
    dot: 'bg-red-500',
    badge: 'bg-red-100 text-red-700',
  },
};

export default function EquipmentPage() {
  const [equipment, setEquipment] = useState<EquipmentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnlyRepair, setShowOnlyRepair] = useState(false);

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        setLoading(true);
        setError('');

        const res = await fetch('/api/equipment');

        if (!res.ok) {
          throw new Error('Failed to fetch equipment data.');
        }

        const result = await res.json();
        setEquipment(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong.');
      } finally {
        setLoading(false);
      }
    };

    fetchEquipment();
  }, []);

  const filteredEquipment = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return equipment.filter((item) => {
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q) ||
        item.site.toLowerCase().includes(q);

      const matchesRepair = !showOnlyRepair || item.status === 'Repair';

      return matchesSearch && matchesRepair;
    });
  }, [equipment, searchQuery, showOnlyRepair]);

  const statusCounts: Record<Status, number> = {
    Ready: filteredEquipment.filter((e) => e.status === 'Ready').length,
    'In Use': filteredEquipment.filter((e) => e.status === 'In Use').length,
    Repair: filteredEquipment.filter((e) => e.status === 'Repair').length,
  };

  const statuses: Status[] = ['Ready', 'In Use', 'Repair'];

  return (
    <div className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">

      {/* ── Page Header ── */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-extrabold tracking-tight text-slate-800 sm:text-2xl">
            Equipment Tracker
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Monitor and manage all construction equipment.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-600 shadow-sm transition-colors hover:bg-slate-50 sm:px-4">
            Export
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-amber-400 px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm shadow-amber-200 transition-colors hover:bg-amber-500 sm:px-4">
            Add Equipment
          </button>
        </div>
      </div>

      {/* ── Summary Stat Cards ── */}
      <div className="mb-5 grid grid-cols-3 gap-2 sm:mb-6 sm:gap-4">
        {statuses.map((s) => (
          <div
            key={s}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-sm sm:gap-4 sm:px-5 sm:py-4"
          >
            <span className={`h-2.5 w-2.5 flex-shrink-0 rounded-full sm:h-3 sm:w-3 ${statusConfig[s].dot}`} />
            <div className="min-w-0">
              <p className="truncate text-[10px] font-semibold uppercase tracking-widest text-slate-500 sm:text-xs">
                {s}
              </p>
              <p className="text-xl font-extrabold tracking-tight text-slate-800 sm:text-2xl">
                {statusCounts[s]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Table Card ── */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        {/* Toolbar */}
        <div className="flex flex-col gap-3 border-b border-slate-100 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4">
          <p className="text-sm text-slate-500">
            {loading ? (
              'Loading equipment...'
            ) : (
              <>
                Showing{' '}
                <span className="font-semibold text-slate-700">{filteredEquipment.length}</span>{' '}
                of{' '}
                <span className="font-semibold text-slate-700">{equipment.length}</span>{' '}
                assets
                {showOnlyRepair && (
                  <span className="ml-2 rounded-full bg-red-50 px-2 py-0.5 text-xs font-semibold text-red-500 ring-1 ring-red-200">
                    Repair only
                  </span>
                )}
              </>
            )}
          </p>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <div className="flex items-center gap-2">
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="flex items-center gap-1 text-xs text-slate-400 transition-colors hover:text-slate-600"
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => setShowOnlyRepair((prev) => !prev)}
                className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${
                  showOnlyRepair
                    ? 'border-red-500 bg-red-500 text-white shadow-sm shadow-red-200'
                    : 'border-slate-200 bg-white text-slate-500 hover:border-red-300 hover:text-red-500'
                }`}
              >
                {showOnlyRepair ? 'Maintenance: ON' : 'Maintenance Mode'}
              </button>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600 transition focus:outline-none sm:w-56"
            />
          </div>
        </div>

        {/* Mobile card list — shown below sm */}
        <div className="divide-y divide-slate-100 sm:hidden">
          {loading ? (
            <p className="px-4 py-10 text-center text-sm text-slate-400">Loading equipment data...</p>
          ) : error ? (
            <p className="px-4 py-10 text-center text-sm text-red-500">{error}</p>
          ) : filteredEquipment.length > 0 ? (
            filteredEquipment.map((item) => (
              <div key={item.id} className="flex items-center justify-between px-4 py-3">
                <div className="min-w-0">
                  <div className="mb-0.5 flex items-center gap-2">
                    <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-xs font-semibold text-slate-400">
                      {item.id}
                    </span>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${statusConfig[item.status].badge}`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="truncate text-sm font-semibold text-slate-700">{item.name}</p>
                  <p className="mt-0.5 truncate text-xs text-slate-400">{item.site}</p>
                </div>
                <button className="ml-3 flex-shrink-0 rounded-md p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />
                  </svg>
                </button>
              </div>
            ))
          ) : (
            <p className="px-4 py-10 text-center text-sm text-slate-400">No equipment found.</p>
          )}
        </div>

        {/* Table — hidden on mobile, visible on sm+ */}
        <div className="hidden overflow-x-auto sm:block">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase tracking-widest text-slate-500">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Equipment Name</th>
                <th className="hidden px-6 py-3 md:table-cell">Current Site</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-sm text-slate-400">
                    Loading equipment data...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-sm text-red-500">
                    {error}
                  </td>
                </tr>
              ) : filteredEquipment.length > 0 ? (
                filteredEquipment.map((item) => (
                  <tr key={item.id} className="group transition-colors hover:bg-slate-50/70">
                    <td className="px-6 py-4">
                      <span className="inline-flex min-w-[72px] justify-center rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs font-semibold text-slate-700">
                        {item.id}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-slate-700">{item.name}</td>
                    <td className="hidden px-6 py-4 text-slate-500 md:table-cell">{item.site}</td>
                    <td className="px-6 py-4">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusConfig[item.status].badge}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="rounded-md p-1 text-slate-400 opacity-0 transition-all hover:bg-slate-100 hover:text-slate-600 group-hover:opacity-100">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-sm text-slate-400">
                    No equipment found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}