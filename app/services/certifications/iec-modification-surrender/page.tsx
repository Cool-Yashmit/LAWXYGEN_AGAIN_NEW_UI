export const metadata = {
  title: "IEC Modification / Surrender | LAWXYGEN",
  description: "IEC Modification / Surrender — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="IEC Modification / Surrender" category="Certifications" categorySlug="certifications" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
