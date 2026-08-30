export const metadata = {
  title: "360 Degree Protection – ROC Compliance + Accounting + Legal | LAWXYGEN",
  description: "360 Degree Protection – ROC Compliance + Accounting + Legal — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="360 Degree Protection – ROC Compliance + Accounting + Legal" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
