export const metadata = {
  title: "MSME / Udyog Aadhaar Registration | LAWXYGEN",
  description: "MSME / Udyog Aadhaar Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="MSME / Udyog Aadhaar Registration" category="Certifications" categorySlug="certifications" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
