export const metadata = {
  title: "Credit & Debit Notes Management | LAWXYGEN",
  description: "Credit & Debit Notes Management — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Credit & Debit Notes Management" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
