export const metadata = {
  title: "Income Tax Return (ITR) Filing – Businesses | LAWXYGEN",
  description: "Income Tax Return (ITR) Filing – Businesses — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Income Tax Return (ITR) Filing – Businesses" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
