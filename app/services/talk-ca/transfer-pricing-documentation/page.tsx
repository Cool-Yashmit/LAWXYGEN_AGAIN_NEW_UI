export const metadata = {
  title: "Transfer Pricing Documentation | LAWXYGEN",
  description: "Transfer Pricing Documentation — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Transfer Pricing Documentation" category="Talk to a CA" categorySlug="talk-ca" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
