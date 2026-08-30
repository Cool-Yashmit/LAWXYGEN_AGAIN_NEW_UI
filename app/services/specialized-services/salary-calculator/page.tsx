export const metadata = {
  title: "Salary Calculator | LAWXYGEN",
  description: "Salary Calculator — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Salary Calculator" category="Specialized Services" categorySlug="specialized-services" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
