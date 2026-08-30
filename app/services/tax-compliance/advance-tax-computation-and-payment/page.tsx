export const metadata = {
  title: "Advance Tax Computation & Payment | LAWXYGEN",
  description: "Advance Tax Computation & Payment — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Advance Tax Computation & Payment" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 0 } accent="#2f7cf6" pageClassName={styles.servicePage} />;
}
