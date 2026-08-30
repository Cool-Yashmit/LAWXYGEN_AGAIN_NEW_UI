export const metadata = {
  title: "FSSAI License Renewal | LAWXYGEN",
  description: "FSSAI License Renewal — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="FSSAI License Renewal" category="Certifications" categorySlug="certifications" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
