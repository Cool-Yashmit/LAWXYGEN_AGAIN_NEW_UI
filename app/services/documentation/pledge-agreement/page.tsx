export const metadata = {
  title: "Pledge Agreement | LAWXYGEN",
  description: "Pledge Agreement — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Pledge Agreement" category="Documentation" categorySlug="documentation" theme={ 0 } accent="#2f7cf6" pageClassName={styles.servicePage} />;
}
