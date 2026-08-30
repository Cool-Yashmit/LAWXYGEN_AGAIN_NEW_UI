export const metadata = {
  title: "TDS Certificate (Form 16 / 16A) Generation | LAWXYGEN",
  description: "TDS Certificate (Form 16 / 16A) Generation — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="TDS Certificate (Form 16 / 16A) Generation" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
