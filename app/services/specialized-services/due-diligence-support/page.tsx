export const metadata = {
  title: "Due Diligence Support | LAWXYGEN",
  description: "Due Diligence Support — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Due Diligence Support" category="Specialized Services" categorySlug="specialized-services" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
