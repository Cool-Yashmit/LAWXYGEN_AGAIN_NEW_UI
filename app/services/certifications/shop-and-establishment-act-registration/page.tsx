export const metadata = {
  title: "Shop & Establishment Act Registration | LAWXYGEN",
  description: "Shop & Establishment Act Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Shop & Establishment Act Registration" category="Certifications" categorySlug="certifications" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
