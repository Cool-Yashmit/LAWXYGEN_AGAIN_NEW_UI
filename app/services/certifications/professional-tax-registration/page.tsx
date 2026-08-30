export const metadata = {
  title: "Professional Tax Registration | LAWXYGEN",
  description: "Professional Tax Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Professional Tax Registration" category="Certifications" categorySlug="certifications" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
