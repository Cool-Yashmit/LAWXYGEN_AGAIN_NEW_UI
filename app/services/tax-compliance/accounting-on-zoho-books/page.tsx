export const metadata = {
  title: "Accounting on Zoho Books | LAWXYGEN",
  description: "Accounting on Zoho Books — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Accounting on Zoho Books" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
