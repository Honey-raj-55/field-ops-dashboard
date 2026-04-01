export default function SettingsPage() {
    return (
      <div className="px-8 py-6">
        <div className="mb-5">
          <h2 className="text-lg font-bold text-slate-800">Settings</h2>
          <p className="mt-0.5 text-sm text-slate-400">
            Manage your profile and workspace preferences
          </p>
        </div>
  
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
          <div className="xl:col-span-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-500 text-3xl font-extrabold text-slate-900 shadow-md">
                  HR
                </div>
  
                <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-800">
                  Honey Raj
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-400">
                  Site Manager
                </p>
  
                <div className="mt-5 w-full rounded-xl border border-amber-100 bg-amber-50 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">
                    Profile Status
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Active in ConstructIQ management suite
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="xl:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 px-6 py-4">
                <h3 className="text-sm font-bold text-slate-700">Profile</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Personal details and application preferences
                </p>
              </div>
  
              <div className="divide-y divide-slate-100">
                <div className="flex items-center justify-between px-6 py-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Full Name</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Displayed across your workspace
                    </p>
                  </div>
                  <p className="text-sm font-medium text-slate-600">Honey Raj</p>
                </div>
  
                <div className="flex items-center justify-between px-6 py-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Role</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Your active project responsibility
                    </p>
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                    Site Manager
                  </span>
                </div>
  
                <div className="flex items-center justify-between px-6 py-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-700">
                      Email Notifications
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Receive project updates and alerts by email
                    </p>
                  </div>
  
                  <button
                    type="button"
                    aria-pressed="true"
                    className="relative inline-flex h-7 w-12 items-center rounded-full bg-emerald-500 transition-colors"
                  >
                    <span className="inline-block h-5 w-5 translate-x-6 transform rounded-full bg-white shadow-sm transition-transform" />
                  </button>
                </div>
  
                <div className="flex items-center justify-between px-6 py-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Language</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Preferred language for the dashboard
                    </p>
                  </div>
                  <p className="text-sm font-medium text-slate-600">English</p>
                </div>
  
                <div className="flex items-center justify-between px-6 py-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Theme</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Current interface appearance for your workspace
                    </p>
                  </div>
                  <p className="text-sm font-medium text-slate-600">Light</p>
                </div>
  
                <div className="flex items-center justify-between px-6 py-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-700">
                      Project Alerts
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Get notified for delays, risks, and equipment issues
                    </p>
                  </div>
  
                  <button
                    type="button"
                    aria-pressed="false"
                    className="relative inline-flex h-7 w-12 items-center rounded-full bg-slate-200 transition-colors"
                  >
                    <span className="inline-block h-5 w-5 translate-x-1 transform rounded-full bg-white shadow-sm transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }