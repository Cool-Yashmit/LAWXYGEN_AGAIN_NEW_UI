export const metadata = {
  title: "Income Tax Calculator Tool | LAWXYGEN",
  description: "Income Tax Calculator Tool — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Income Tax Calculator Tool" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 0 } accent="#2f7cf6" pageClassName={styles.servicePage} />;
}
