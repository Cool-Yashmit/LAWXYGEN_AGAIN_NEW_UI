export const metadata = {
  title: "Payroll Processing | LAWXYGEN",
  description: "Payroll Processing — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Payroll Processing" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 0 } accent="#2f7cf6" pageClassName={styles.servicePage} />;
}
