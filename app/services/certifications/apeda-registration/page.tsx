export const metadata = {
  title: "APEDA Registration | LAWXYGEN",
  description: "APEDA Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="APEDA Registration" category="Certifications" categorySlug="certifications" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
