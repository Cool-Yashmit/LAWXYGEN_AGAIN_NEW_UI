export const metadata = {
  title: "Financial Statement Preparation (P&L, Balance Sheet) | LAWXYGEN",
  description: "Financial Statement Preparation (P&L, Balance Sheet) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Financial Statement Preparation (P&L, Balance Sheet)" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
