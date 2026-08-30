export const metadata = {
  title: "Change of Business Activity / Object Clause | LAWXYGEN",
  description: "Change of Business Activity / Object Clause — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Change of Business Activity / Object Clause" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
