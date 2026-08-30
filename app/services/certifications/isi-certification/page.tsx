export const metadata = {
  title: "ISI Certification | LAWXYGEN",
  description: "ISI Certification — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="ISI Certification" category="Certifications" categorySlug="certifications" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
