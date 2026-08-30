export const metadata = {
  title: "Business Setup Cost Calculator | LAWXYGEN",
  description: "Business Setup Cost Calculator — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Business Setup Cost Calculator" category="Specialized Services" categorySlug="specialized-services" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
