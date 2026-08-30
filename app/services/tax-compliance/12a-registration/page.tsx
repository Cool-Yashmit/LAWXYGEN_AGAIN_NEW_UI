export const metadata = {
  title: "12A Registration | LAWXYGEN",
  description: "12A Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="12A Registration" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
