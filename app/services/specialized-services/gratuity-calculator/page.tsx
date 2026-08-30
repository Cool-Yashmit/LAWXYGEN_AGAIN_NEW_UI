export const metadata = {
  title: "Gratuity Calculator | LAWXYGEN",
  description: "Gratuity Calculator — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Gratuity Calculator" category="Specialized Services" categorySlug="specialized-services" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
