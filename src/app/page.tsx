import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Finance360 | Your Complete Financial Picture",
  description:
    "Finance360 helps you manage income, expenses, budgets, investments, and financial goals in one place.",
};

const features = [
  {
    id: 1,
    title: "Transaction Management",
    description:
      "Record income and expenses, organize transactions, and understand where your money goes.",
  },
  {
    id: 2,
    title: "Budget Tracking",
    description:
      "Create monthly budgets, set spending limits, and monitor your financial habits.",
  },
  {
    id: 3,
    title: "Investment Tracking",
    description:
      "Manage investment holdings and monitor your portfolio's performance.",
  },
  {
    id: 4,
    title: "Financial Analytics",
    description:
      "Visualize income, expenses, cash flow, and financial trends through interactive reports.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <header className="border-b border-slate-800">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-blue-400"
          >
            Finance360
          </Link>

          <div className="flex items-center gap-6">
            <a
              href="#features"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Features
            </a>

            <a
              href="#about"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              About
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="mx-auto max-w-6xl px-6 py-24 text-center sm:py-32">
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Personal Finance Management
          </span>

          <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Your Complete
            <span className="block text-blue-400">Financial Picture.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Take control of your financial future. Manage transactions, track
            budgets, monitor investments, and understand your finances in one
            powerful platform.
          </p>

          <a
            href="#features"
            className="mt-10 inline-block rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
          >
            Explore Features
          </a>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="border-t border-slate-800 bg-slate-900/50 py-20"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold">
                Everything You Need to Manage Your Money
              </h2>

              <p className="mt-4 text-slate-400">
                Explore the features we&apos;re building into Finance360.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {features.map((feature) => (
                <article
                  key={feature.id}
                  className="rounded-xl border border-slate-800 bg-slate-900 p-8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/20 text-lg font-bold text-blue-400">
                    {feature.id}
                  </div>

                  <h3 className="text-xl font-semibold">{feature.title}</h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="mx-auto max-w-4xl px-6 py-24 text-center"
        >
          <h2 className="text-3xl font-bold">
            One Platform. Complete Financial Clarity.
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Finance360 is a full-stack personal finance management application
            designed to help users organize financial information, understand
            spending patterns, and work toward their financial goals.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-500">
          Finance360. Your Complete Financial Picture.
        </div>
      </footer>
    </div>
  );
}
