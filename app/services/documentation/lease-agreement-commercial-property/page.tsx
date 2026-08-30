export const metadata = {
  title: "Lease Agreement (Commercial Property) | LAWXYGEN",
  description: "Lease Agreement (Commercial Property) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Lease Agreement (Commercial Property)" category="Documentation" categorySlug="documentation" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
