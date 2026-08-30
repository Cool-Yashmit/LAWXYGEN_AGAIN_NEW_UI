export const metadata = {
  title: "Income Tax Return (ITR) Filing – Individuals | LAWXYGEN",
  description: "Income Tax Return (ITR) Filing – Individuals — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Income Tax Return (ITR) Filing – Individuals" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
