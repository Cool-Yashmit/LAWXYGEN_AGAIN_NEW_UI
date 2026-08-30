export const metadata = {
  title: "Cheque Bounce / Dishonour Cases | LAWXYGEN",
  description: "Cheque Bounce / Dishonour Cases — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Cheque Bounce / Dishonour Cases" category="Talk to a Lawyer" categorySlug="talk-lawyer" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
