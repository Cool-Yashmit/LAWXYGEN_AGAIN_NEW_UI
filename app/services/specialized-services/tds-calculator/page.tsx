export const metadata = {
  title: "TDS Calculator | LAWXYGEN",
  description: "TDS Calculator — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="TDS Calculator" category="Specialized Services" categorySlug="specialized-services" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
