export const metadata = {
  title: "Service Level Agreement (SLA) | LAWXYGEN",
  description: "Service Level Agreement (SLA) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Service Level Agreement (SLA)" category="Documentation" categorySlug="documentation" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
