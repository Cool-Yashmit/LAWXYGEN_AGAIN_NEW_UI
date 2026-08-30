export const metadata = {
  title: "ESOP Policy & Implementation Agreement | LAWXYGEN",
  description: "ESOP Policy & Implementation Agreement — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="ESOP Policy & Implementation Agreement" category="Documentation" categorySlug="documentation" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
