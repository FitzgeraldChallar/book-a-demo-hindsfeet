import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hindsfeet Accounting | Financial clarity for every organization",
  description: "A connected financial management system for businesses and institutions. Accounting, payroll, inventory, banking, reporting and intelligent insights.",
  keywords: ["Hindsfeet Accounting", "Accounting software Liberia", "Financial management system", "Payroll Liberia", "SaaS accounting"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
