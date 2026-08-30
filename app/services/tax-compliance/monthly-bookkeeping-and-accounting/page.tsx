export const metadata = {
  title: "Monthly Bookkeeping & Accounting | LAWXYGEN",
  description: "Monthly Bookkeeping & Accounting — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Monthly Bookkeeping & Accounting" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
