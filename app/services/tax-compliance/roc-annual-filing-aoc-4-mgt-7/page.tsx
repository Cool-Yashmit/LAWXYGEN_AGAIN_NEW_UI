export const metadata = {
  title: "ROC Annual Filing (AOC-4, MGT-7) | LAWXYGEN",
  description: "ROC Annual Filing (AOC-4, MGT-7) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="ROC Annual Filing (AOC-4, MGT-7)" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
