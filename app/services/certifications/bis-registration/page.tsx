export const metadata = {
  title: "BIS Registration | LAWXYGEN",
  description: "BIS Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="BIS Registration" category="Certifications" categorySlug="certifications" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
