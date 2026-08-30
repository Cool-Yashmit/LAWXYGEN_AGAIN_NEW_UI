export const metadata = {
  title: "Drug License | LAWXYGEN",
  description: "Drug License — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Drug License" category="Certifications" categorySlug="certifications" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
