export const metadata = {
  title: "Import Export Code (IEC) Registration | LAWXYGEN",
  description: "Import Export Code (IEC) Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Import Export Code (IEC) Registration" category="Certifications" categorySlug="certifications" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
