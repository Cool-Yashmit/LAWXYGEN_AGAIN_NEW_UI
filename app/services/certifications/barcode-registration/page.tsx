export const metadata = {
  title: "Barcode Registration | LAWXYGEN",
  description: "Barcode Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Barcode Registration" category="Certifications" categorySlug="certifications" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
