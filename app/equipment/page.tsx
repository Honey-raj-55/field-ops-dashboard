'use client';

import React, { useMemo, useState } from 'react';

type Status = 'Ready' | 'In Use' | 'Repair';

type EquipmentItem = {
  id: string;
  name: string;
  site: string;
  status: Status;
};

const ALL_EQUIPMENT: EquipmentItem[] = [
  { id: 'EQ-001', name: 'Excavator 320D', site: 'Dallas Site A', status: 'Ready' },
  { id: 'EQ-002', name: 'Bulldozer D6', site: 'Plano Site B', status: 'In Use' },
  { id: 'EQ-003', name: 'Tower Crane TC1', site: 'Irving Site C', status: 'Repair' },
  { id: 'EQ-004', name: 'Concrete Mixer CM9', site: 'Dallas Site A', status: 'Ready' },
  { id: 'EQ-005', name: 'Forklift FL12', site: 'Frisco Site D', status: 'In Use' },
  { id: 'EQ-006', name: 'Loader LD7', site: 'Arlington Site E', status: 'Repair' },
];

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
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnlyRepair, setShowOnlyRepair] = useState(false);

  const filteredEquipment = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return ALL_EQUIPMENT.filter((item) => {
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q) ||
        item.site.toLowerCase().includes(q);

      const matchesRepair = !showOnlyRepair || item.status === 'Repair';

      return matchesSearch && matchesRepair;
    });
  }, [searchQuery, showOnlyRepair]);

  const statusCounts: Record<Status, number> = {
    Ready: filteredEquipment.filter((e) => e.status === 'Ready').length,
    'In Use': filteredEquipment.filter((e) => e.status === 'In Use').length,
    Repair: filteredEquipment.filter((e) => e.status === 'Repair').length,
  };

  const statuses: Status[] = ['Ready', 'In Use', 'Repair'];

  return (
    <div className="px-8 py-6">
      {/* Page Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-800">
            Equipment Tracker
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Monitor and manage all construction equipment.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition-colors hover:bg-slate-50">
            Export
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm shadow-amber-200 transition-colors hover:bg-amber-500">
            Add Equipment
          </button>
        </div>
      </div>

      {/* Summary Stat Cards */}
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {statuses.map((s) => (
          <div
            key={s}
            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
          >
            <span
              className={`h-3 w-3 flex-shrink-0 rounded-full ${statusConfig[s].dot}`}
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                {s}
              </p>
              <p className="text-2xl font-extrabold tracking-tight text-slate-800">
                {statusCounts[s]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Table Card */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* Toolbar */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <p className="text-sm text-slate-500">
            Showing{' '}
            <span className="font-semibold text-slate-700">
              {filteredEquipment.length}
            </span>{' '}
            of{' '}
            <span className="font-semibold text-slate-700">
              {ALL_EQUIPMENT.length}
            </span>{' '}
            assets
            {showOnlyRepair && (
              <span className="ml-2 rounded-full bg-red-50 px-2 py-0.5 text-xs font-semibold text-red-500 ring-1 ring-red-200">
                Repair only
              </span>
            )}
          </p>

          <div className="flex items-center gap-3">
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

            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-56 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600 transition focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase tracking-widest text-slate-500">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Equipment Name</th>
                <th className="px-6 py-3">Current Site</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredEquipment.length > 0 ? (
                filteredEquipment.map((item) => (
                    <tr key={item.id} className="transition-colors hover:bg-slate-50/70">
                    <td className="px-6 py-4">
                      <span className="inline-flex min-w-[72px] justify-center rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs font-semibold text-slate-700">
                        {item.id}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-slate-700">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 text-slate-500">{item.site}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusConfig[item.status].badge}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-slate-400">...</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-10 text-center text-sm text-slate-400"
                  >
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