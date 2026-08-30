export const metadata = {
  title: "Annual Compliance Package for LLP | LAWXYGEN",
  description: "Annual Compliance Package for LLP — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Annual Compliance Package for LLP" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
