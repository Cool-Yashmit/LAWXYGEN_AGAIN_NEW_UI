export const metadata = {
  title: "Business Transfer Agreement | LAWXYGEN",
  description: "Business Transfer Agreement — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Business Transfer Agreement" category="Documentation" categorySlug="documentation" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
