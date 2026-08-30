export const metadata = {
  title: "General Power of Attorney (GPA) | LAWXYGEN",
  description: "General Power of Attorney (GPA) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="General Power of Attorney (GPA)" category="Documentation" categorySlug="documentation" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
