
import Link from "next/link";

type Transaction = {
  id: number;
  description: string;
  category: string;
  amount: number;
  type: "income" | "expense";
};

const transactions: Transaction[] = [
  {
    id: 1,
    description: "Salary",
    category: "Employment",
    amount: 4500,
    type: "income",
  },
  {
    id: 2,
    description: "Rent",
    category: "Housing",
    amount: 1200,
    type: "expense",
  },
  {
    id: 3,
    description: "Groceries",
    category: "Food",
    amount: 250,
    type: "expense",
  },
  {
    id: 4,
    description: "Freelance Project",
    category: "Freelance",
    amount: 800,
    type: "income",
  },
  {
    id: 5,
    description: "Internet Bill",
    category: "Utilities",
    amount: 75,
    type: "expense",
  },
];

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function DashboardPage() {
  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const netCashFlow = totalIncome - totalExpenses;

  const summary = [
    {
      title: "Total Income",
      value: totalIncome,
      color: "text-emerald-400",
    },
    {
      title: "Total Expenses",
      value: totalExpenses,
      color: "text-rose-400",
    },
    {
      title: "Net Cash Flow",
      value: netCashFlow,
      color: "text-cyan-400",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-cyan-400"
          >
            Finance360
          </Link>

          <Link
            href="/"
            className="text-sm text-slate-300 hover:text-white"
          >
            Back to Home
          </Link>
        </nav>

        <header className="mt-16">
          <h1 className="text-3xl font-bold md:text-4xl">
            Financial Dashboard
          </h1>

          <p className="mt-3 text-slate-400">
            An overview of your sample financial activity.
          </p>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {summary.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <p className="text-sm text-slate-400">
                {item.title}
              </p>

              <p
                className={`mt-3 text-3xl font-bold ${item.color}`}
              >
                {currencyFormatter.format(item.value)}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Recent Transactions
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Demonstration transactions for learning purposes.
          </p>

          <div className="mt-6 overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between gap-4 border-b border-slate-800 p-5 last:border-b-0"
              >
                <div>
                  <h3 className="font-medium">
                    {transaction.description}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {transaction.category}
                  </p>
                </div>

                <p
                  className={
                    transaction.type === "income"
                      ? "font-semibold text-emerald-400"
                      : "font-semibold text-rose-400"
                  }
                >
                  {transaction.type === "income" ? "+" : "-"}
                  {currencyFormatter.format(transaction.amount)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
