export const metadata = {
  title: "Smart Billing & Invoicing Module | LAWXYGEN",
  description: "Smart Billing & Invoicing Module — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Smart Billing & Invoicing Module" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
