export const metadata = {
  title: "Venture Capital Funding Legal Support | LAWXYGEN",
  description: "Venture Capital Funding Legal Support — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Venture Capital Funding Legal Support" category="Specialized Services" categorySlug="specialized-services" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
