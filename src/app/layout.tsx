import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finance360 | Your Complete Financial Picture",
  description:
    "Manage your finances, track expenses, monitor investments, and understand your financial health.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
