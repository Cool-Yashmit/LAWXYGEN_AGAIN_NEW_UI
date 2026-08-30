export const metadata = {
  title: "Retirement Planning Calculator | LAWXYGEN",
  description: "Retirement Planning Calculator — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Retirement Planning Calculator" category="Specialized Services" categorySlug="specialized-services" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
