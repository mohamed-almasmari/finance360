import type { Metadata } from "next";

import {
  transactions,
  calculateTotals,
  formatCurrency,
} from "@/lib/transactions";

export const metadata: Metadata = {
  title: "Transactions | Finance360",
  description: "View your income and expense transactions.",
};

export default function TransactionsPage() {
  const { income, expenses, netCashFlow } = calculateTotals(transactions);

  const sortedTransactions = [...transactions].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  return (
    <div className="space-y-10">
      {/* Page Header */}
      <section>
        <h1 className="text-3xl font-bold">Transactions</h1>

        <p className="mt-3 text-slate-400">
          View and organize your income and expenses.
        </p>

        <p className="mt-2 text-sm text-blue-400">
          Currently displaying sample financial data.
        </p>
      </section>

      {/* Transaction Summary */}
      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-sm font-medium text-slate-400">Total Income</h2>

          <p className="mt-4 text-3xl font-bold text-green-400">
            {formatCurrency(income)}
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-sm font-medium text-slate-400">Total Expenses</h2>

          <p className="mt-4 text-3xl font-bold text-red-400">
            {formatCurrency(expenses)}
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-sm font-medium text-slate-400">Net Cash Flow</h2>

          <p className="mt-4 text-3xl font-bold text-blue-400">
            {formatCurrency(netCashFlow)}
          </p>
        </div>
      </section>

      {/* Transactions Table */}
      <section className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 px-6 py-5">
          <h2 className="text-xl font-semibold">Transaction History</h2>

          <span className="text-sm text-slate-400">
            {transactions.length} Transactions
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-162.5 text-left">
            <thead className="bg-slate-800/60 text-sm text-slate-400">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Description
                </th>

                <th scope="col" className="px-6 py-4">
                  Category
                </th>

                <th scope="col" className="px-6 py-4">
                  Date
                </th>

                <th scope="col" className="px-6 py-4">
                  Type
                </th>

                <th scope="col" className="px-6 py-4 text-right">
                  Amount
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800">
              {sortedTransactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="transition hover:bg-slate-800/40"
                >
                  <td className="px-6 py-4 font-medium">
                    {transaction.description}
                  </td>

                  <td className="px-6 py-4 text-slate-400">
                    {transaction.category}
                  </td>

                  <td className="px-6 py-4 text-slate-400">
                    {transaction.date}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={
                        transaction.type === "income"
                          ? "text-green-400"
                          : "text-red-400"
                      }
                    >
                      {transaction.type === "income" ? "Income" : "Expense"}
                    </span>
                  </td>

                  <td
                    className={`px-6 py-4 text-right font-semibold ${
                      transaction.type === "income"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {transaction.type === "income" ? "+" : "-"}
                    {formatCurrency(transaction.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {transactions.length === 0 && (
          <p className="px-6 py-12 text-center text-slate-400">
            No transactions available.
          </p>
        )}
      </section>
    </div>
  );
}
