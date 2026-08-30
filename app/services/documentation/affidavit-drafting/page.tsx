export const metadata = {
  title: "Affidavit Drafting | LAWXYGEN",
  description: "Affidavit Drafting — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Affidavit Drafting" category="Documentation" categorySlug="documentation" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
