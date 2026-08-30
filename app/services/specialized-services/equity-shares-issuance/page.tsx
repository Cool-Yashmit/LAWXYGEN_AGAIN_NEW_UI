export const metadata = {
  title: "Equity Shares Issuance | LAWXYGEN",
  description: "Equity Shares Issuance — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Equity Shares Issuance" category="Specialized Services" categorySlug="specialized-services" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
