export const metadata = {
  title: "Payroll Compliance Advisory | LAWXYGEN",
  description: "Payroll Compliance Advisory — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Payroll Compliance Advisory" category="Talk to a CA" categorySlug="talk-ca" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
