export const metadata = {
  title: "FSSAI Food License Registration (Basic / State / Central) | LAWXYGEN",
  description: "FSSAI Food License Registration (Basic / State / Central) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="FSSAI Food License Registration (Basic / State / Central)" category="Certifications" categorySlug="certifications" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
