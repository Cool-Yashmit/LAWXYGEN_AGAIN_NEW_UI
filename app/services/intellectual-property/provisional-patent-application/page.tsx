export const metadata = {
  title: "Provisional Patent Application | LAWXYGEN",
  description: "Provisional Patent Application — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Provisional Patent Application" category="Intellectual Property" categorySlug="intellectual-property" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
