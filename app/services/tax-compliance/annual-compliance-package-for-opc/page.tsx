export const metadata = {
  title: "Annual Compliance Package for OPC | LAWXYGEN",
  description: "Annual Compliance Package for OPC — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Annual Compliance Package for OPC" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
