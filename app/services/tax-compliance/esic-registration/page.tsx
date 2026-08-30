export const metadata = {
  title: "ESIC Registration | LAWXYGEN",
  description: "ESIC Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="ESIC Registration" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 0 } accent="#2f7cf6" pageClassName={styles.servicePage} />;
}
