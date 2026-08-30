export const metadata = {
  title: "Valuation Report for Share Issuance | LAWXYGEN",
  description: "Valuation Report for Share Issuance — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Valuation Report for Share Issuance" category="Specialized Services" categorySlug="specialized-services" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
