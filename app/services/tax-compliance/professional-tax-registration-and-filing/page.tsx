export const metadata = {
  title: "Professional Tax Registration & Filing | LAWXYGEN",
  description: "Professional Tax Registration & Filing — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Professional Tax Registration & Filing" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
