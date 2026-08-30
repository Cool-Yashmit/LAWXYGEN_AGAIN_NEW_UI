export const metadata = {
  title: "Provident Fund (PF) Registration | LAWXYGEN",
  description: "Provident Fund (PF) Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Provident Fund (PF) Registration" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
