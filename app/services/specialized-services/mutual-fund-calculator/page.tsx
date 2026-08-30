export const metadata = {
  title: "Mutual Fund Calculator | LAWXYGEN",
  description: "Mutual Fund Calculator — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Mutual Fund Calculator" category="Specialized Services" categorySlug="specialized-services" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
