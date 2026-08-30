export const metadata = {
  title: "Payroll Compliance (PF, ESIC, PT) | LAWXYGEN",
  description: "Payroll Compliance (PF, ESIC, PT) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Payroll Compliance (PF, ESIC, PT)" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 0 } accent="#2f7cf6" pageClassName={styles.servicePage} />;
}
