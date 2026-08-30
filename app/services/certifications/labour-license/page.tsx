export const metadata = {
  title: "Labour License | LAWXYGEN",
  description: "Labour License — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Labour License" category="Certifications" categorySlug="certifications" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
