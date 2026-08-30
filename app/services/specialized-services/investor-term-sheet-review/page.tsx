export const metadata = {
  title: "Investor Term Sheet Review | LAWXYGEN",
  description: "Investor Term Sheet Review — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Investor Term Sheet Review" category="Specialized Services" categorySlug="specialized-services" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
