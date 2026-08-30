export const metadata = {
  title: "Succession Certificate | LAWXYGEN",
  description: "Succession Certificate — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Succession Certificate" category="Documentation" categorySlug="documentation" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
