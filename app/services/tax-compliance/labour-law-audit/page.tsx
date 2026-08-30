export const metadata = {
  title: "Labour Law Audit | LAWXYGEN",
  description: "Labour Law Audit — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Labour Law Audit" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
