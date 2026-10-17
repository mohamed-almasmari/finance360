import Link from "next/link";
import type { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

const upcomingPages = [
  "Budgets",
  "Investments",
  "Accounts",
  "Goals",
  "Analytics",
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full border-b border-slate-800 bg-slate-900 md:w-64 md:shrink-0 md:border-b-0 md:border-r">
          {/* Branding */}
          <div className="border-b border-slate-800 px-6 py-6">
            <Link href="/" className="text-2xl font-bold text-blue-400">
              Finance360
            </Link>

            <p className="mt-2 text-xs text-slate-400">
              Your Complete Financial Picture
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Dashboard navigation" className="space-y-2 p-4">
            <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Workspace
            </p>

            <Link
              href="/dashboard"
              className="block rounded-lg px-4 py-3 font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              Overview
            </Link>

            <Link
              href="/dashboard/transactions"
              className="block rounded-lg px-4 py-3 font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              Transactions
            </Link>

            {/* Upcoming Pages */}
            <p className="px-3 pb-2 pt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Coming Soon
            </p>

            {upcomingPages.map((page) => (
              <div
                key={page}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-sm text-slate-500"
              >
                <span>{page}</span>

                <span className="text-xs text-slate-600">Soon</span>
              </div>
            ))}
          </nav>

          {/* Homepage Navigation */}
          <div className="px-8 py-6">
            <Link
              href="/"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              ← Back to Home
            </Link>
          </div>
        </aside>

        {/* Main Dashboard Area */}
        <div className="min-w-0 flex-1">
          {/* Top Header */}
          <header className="border-b border-slate-800 bg-slate-950 px-6 py-6">
            <div className="mx-auto max-w-6xl">
              <p className="text-sm text-slate-400">Finance360 / Workspace</p>
            </div>
          </header>

          {/* Dynamic Page Content */}
          <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
        </div>
      </div>
    </div>
  );
}
