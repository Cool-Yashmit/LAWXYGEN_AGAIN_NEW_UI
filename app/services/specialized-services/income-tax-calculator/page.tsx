export const metadata = {
  title: "Income Tax Calculator | LAWXYGEN",
  description: "Income Tax Calculator — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Income Tax Calculator" category="Specialized Services" categorySlug="specialized-services" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
