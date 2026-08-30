export const metadata = {
  title: "Halal Certification | LAWXYGEN",
  description: "Halal Certification — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Halal Certification" category="Certifications" categorySlug="certifications" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
