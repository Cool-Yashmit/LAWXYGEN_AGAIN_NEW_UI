export const metadata = {
  title: "Contract Labour Registration | LAWXYGEN",
  description: "Contract Labour Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Contract Labour Registration" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 0 } accent="#2f7cf6" pageClassName={styles.servicePage} />;
}
