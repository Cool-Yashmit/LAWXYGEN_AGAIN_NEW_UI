export const metadata = {
  title: "Rental / Lease Agreement (Residential) | LAWXYGEN",
  description: "Rental / Lease Agreement (Residential) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Rental / Lease Agreement (Residential)" category="Documentation" categorySlug="documentation" theme={ 0 } accent="#2f7cf6" pageClassName={styles.servicePage} />;
}
