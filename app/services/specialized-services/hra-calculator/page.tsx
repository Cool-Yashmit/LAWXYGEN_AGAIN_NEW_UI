export const metadata = {
  title: "HRA Calculator | LAWXYGEN",
  description: "HRA Calculator — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="HRA Calculator" category="Specialized Services" categorySlug="specialized-services" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
