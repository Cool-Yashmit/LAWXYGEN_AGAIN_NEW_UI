export const metadata = {
  title: "FCRA Registration | LAWXYGEN",
  description: "FCRA Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="FCRA Registration" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
