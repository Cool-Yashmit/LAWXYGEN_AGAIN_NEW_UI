export const metadata = {
  title: "Trade License | LAWXYGEN",
  description: "Trade License — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Trade License" category="Certifications" categorySlug="certifications" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
