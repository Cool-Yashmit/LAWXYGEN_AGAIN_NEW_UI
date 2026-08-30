export const metadata = {
  title: "Police Clearance Certificate (PCC) | LAWXYGEN",
  description: "Police Clearance Certificate (PCC) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Police Clearance Certificate (PCC)" category="Documentation" categorySlug="documentation" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
