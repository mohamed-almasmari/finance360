export type TransactionType = "income" | "expense";

export type Transaction = {
  id: number;
  description: string;
  category: string;
  amount: number;
  type: TransactionType;
  date: string;
};

export const transactions: Transaction[] = [
  {
    id: 1,
    description: "Monthly Salary",
    category: "Employment",
    amount: 4500,
    type: "income",
    date: "2026-10-01",
  },
  {
    id: 2,
    description: "Apartment Rent",
    category: "Housing",
    amount: 1200,
    type: "expense",
    date: "2026-10-02",
  },
  {
    id: 3,
    description: "Grocery Shopping",
    category: "Food",
    amount: 250,
    type: "expense",
    date: "2026-10-04",
  },
  {
    id: 4,
    description: "Freelance Project",
    category: "Freelance",
    amount: 1900,
    type: "income",
    date: "2026-10-07",
  },
  {
    id: 5,
    description: "Electricity Bill",
    category: "Utilities",
    amount: 175,
    type: "expense",
    date: "2026-10-10",
  },
  {
    id: 6,
    description: "Car Insurance",
    category: "Transportation",
    amount: 500,
    type: "expense",
    date: "2026-10-12",
  },
];

export function calculateTotals(records: Transaction[]) {
  const income = records
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const expenses = records
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const netCashFlow = income - expenses;

  return { income, expenses, netCashFlow };
}

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatCurrency(amount: number): string {
  return currencyFormatter.format(amount);
}
