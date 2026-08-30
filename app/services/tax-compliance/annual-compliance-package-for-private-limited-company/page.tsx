export const metadata = {
  title: "Annual Compliance Package for Private Limited Company | LAWXYGEN",
  description: "Annual Compliance Package for Private Limited Company — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Annual Compliance Package for Private Limited Company" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
