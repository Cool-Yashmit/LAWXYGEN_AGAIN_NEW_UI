export const metadata = {
  title: "Divorce (Legal Assistance) | LAWXYGEN",
  description: "Divorce (Legal Assistance) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Divorce (Legal Assistance)" category="Talk to a Lawyer" categorySlug="talk-lawyer" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
