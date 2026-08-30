export const metadata = {
  title: "Apostille / Document Attestation | LAWXYGEN",
  description: "Apostille / Document Attestation — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Apostille / Document Attestation" category="Documentation" categorySlug="documentation" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
