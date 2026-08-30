export const metadata = {
  title: "Arbitration & Mediation | LAWXYGEN",
  description: "Arbitration & Mediation — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Arbitration & Mediation" category="Talk to a Lawyer" categorySlug="talk-lawyer" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
