export const metadata = {
  title: "Fire Safety License (NOC) | LAWXYGEN",
  description: "Fire Safety License (NOC) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Fire Safety License (NOC)" category="Certifications" categorySlug="certifications" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
