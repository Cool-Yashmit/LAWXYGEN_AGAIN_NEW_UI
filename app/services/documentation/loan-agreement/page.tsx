export const metadata = {
  title: "Loan Agreement | LAWXYGEN",
  description: "Loan Agreement — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Loan Agreement" category="Documentation" categorySlug="documentation" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
