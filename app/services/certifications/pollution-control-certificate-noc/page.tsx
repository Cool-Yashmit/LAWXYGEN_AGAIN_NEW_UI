export const metadata = {
  title: "Pollution Control Certificate (NOC) | LAWXYGEN",
  description: "Pollution Control Certificate (NOC) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Pollution Control Certificate (NOC)" category="Certifications" categorySlug="certifications" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
