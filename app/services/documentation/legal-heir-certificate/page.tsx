export const metadata = {
  title: "Legal Heir Certificate | LAWXYGEN",
  description: "Legal Heir Certificate — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Legal Heir Certificate" category="Documentation" categorySlug="documentation" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
