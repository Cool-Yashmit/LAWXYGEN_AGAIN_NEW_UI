export const metadata = {
  title: "PPF Calculator | LAWXYGEN",
  description: "PPF Calculator — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="PPF Calculator" category="Specialized Services" categorySlug="specialized-services" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
