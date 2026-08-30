export const metadata = {
  title: "OSP (Other Service Provider) License | LAWXYGEN",
  description: "OSP (Other Service Provider) License — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="OSP (Other Service Provider) License" category="Certifications" categorySlug="certifications" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
