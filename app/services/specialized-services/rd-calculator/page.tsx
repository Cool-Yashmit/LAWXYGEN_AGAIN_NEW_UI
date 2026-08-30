export const metadata = {
  title: "RD Calculator | LAWXYGEN",
  description: "RD Calculator — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="RD Calculator" category="Specialized Services" categorySlug="specialized-services" theme={ 0 } accent="#2f7cf6" pageClassName={styles.servicePage} />;
}
