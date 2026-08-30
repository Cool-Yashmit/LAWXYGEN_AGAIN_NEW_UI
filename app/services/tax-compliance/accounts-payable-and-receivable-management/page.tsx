export const metadata = {
  title: "Accounts Payable & Receivable Management | LAWXYGEN",
  description: "Accounts Payable & Receivable Management — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Accounts Payable & Receivable Management" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 0 } accent="#2f7cf6" pageClassName={styles.servicePage} />;
}
