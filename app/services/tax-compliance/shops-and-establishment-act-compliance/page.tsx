export const metadata = {
  title: "Shops & Establishment Act Compliance | LAWXYGEN",
  description: "Shops & Establishment Act Compliance — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Shops & Establishment Act Compliance" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
