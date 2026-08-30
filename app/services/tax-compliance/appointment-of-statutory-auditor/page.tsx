export const metadata = {
  title: "Appointment of Statutory Auditor | LAWXYGEN",
  description: "Appointment of Statutory Auditor — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Appointment of Statutory Auditor" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
