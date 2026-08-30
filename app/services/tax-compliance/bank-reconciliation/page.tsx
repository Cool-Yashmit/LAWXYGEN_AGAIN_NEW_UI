export const metadata = {
  title: "Bank Reconciliation | LAWXYGEN",
  description: "Bank Reconciliation — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Bank Reconciliation" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
