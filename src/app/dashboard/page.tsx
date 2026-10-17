import Link from "next/link";
import type { Metadata } from "next";

import {
  transactions,
  calculateTotals,
  formatCurrency,
} from "@/lib/transactions";

export const metadata: Metadata = {
  title: "Dashboard | Finance360",
  description: "View your financial overview.",
};

export default function DashboardPage() {
  const { income, expenses, netCashFlow } = calculateTotals(transactions);

  const recentTransactions = [...transactions]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);

  const summaryCards = [
    {
      title: "Total Income",
      amount: income,
      description: "Money earned",
      color: "text-green-400",
    },
    {
      title: "Total Expenses",
      amount: expenses,
      description: "Money spent",
      color: "text-red-400",
    },
    {
      title: "Net Cash Flow",
      amount: netCashFlow,
      description: "Income minus expenses",
      color: "text-blue-400",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Dashboard Introduction */}
      <section>
        <h1 className="text-3xl font-bold">Financial Dashboard</h1>

        <p className="mt-3 text-slate-400">
          Track your income, expenses, and cash flow.
        </p>

        <p className="mt-2 text-sm text-blue-400">
          Currently displaying sample financial data.
        </p>
      </section>

      {/* Financial Summary Cards */}
      <section className="grid gap-6 lg:grid-cols-3">
        {summaryCards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-slate-800 bg-slate-900 p-6"
          >
            <h2 className="text-sm font-medium text-slate-400">{card.title}</h2>

            <p className={`mt-4 text-3xl font-bold ${card.color}`}>
              {formatCurrency(card.amount)}
            </p>

            <p className="mt-3 text-sm text-slate-500">{card.description}</p>
          </div>
        ))}
      </section>

      {/* Recent Transactions */}
      <section className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 px-6 py-5">
          <h2 className="text-xl font-semibold">Recent Transactions</h2>

          <Link
            href="/dashboard/transactions"
            className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
          >
            View All →
          </Link>
        </div>

        <div className="divide-y divide-slate-800">
          {recentTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between gap-4 px-6 py-5"
            >
              <div>
                <h3 className="font-medium">{transaction.description}</h3>

                <p className="mt-2 text-sm text-slate-400">
                  {transaction.category} • {transaction.date}
                </p>
              </div>

              <span
                className={`whitespace-nowrap font-semibold ${
                  transaction.type === "income"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {transaction.type === "income" ? "+" : "-"}
                {formatCurrency(transaction.amount)}
              </span>
            </div>
          ))}

          {recentTransactions.length === 0 && (
            <p className="px-6 py-12 text-center text-slate-400">
              No transactions yet.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
