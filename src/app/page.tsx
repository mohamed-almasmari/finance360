import Link from "next/link";

const features = [
  {
    title: "Expense Tracking",
    description: "Track your spending and understand where your money goes.",
  },
  {
    title: "Budget Management",
    description: "Create budgets and monitor your financial goals.",
  },
  {
    title: "Wealth Analytics",
    description: "Visualize your assets, liabilities, and net worth.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-cyan-400">
            Finance360
          </Link>

          <Link
            href="/dashboard"
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm transition hover:bg-slate-800"
          >
            Dashboard
          </Link>
        </nav>

        <section className="py-24 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Your Complete Financial Picture
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Take control of your financial future.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Track expenses, manage budgets, monitor your wealth, and understand
            your financial health from one powerful dashboard.
          </p>

          <Link
            href="/dashboard"
            className="mt-8 inline-block rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Explore Dashboard
          </Link>
        </section>

        <section className="grid gap-6 pb-20 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <h2 className="text-xl font-semibold">{feature.title}</h2>

              <p className="mt-3 text-slate-400">{feature.description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
