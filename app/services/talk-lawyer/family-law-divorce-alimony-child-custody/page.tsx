export const metadata = {
  title: "Family Law – Divorce, Alimony, Child Custody | LAWXYGEN",
  description: "Family Law – Divorce, Alimony, Child Custody — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Family Law – Divorce, Alimony, Child Custody" category="Talk to a Lawyer" categorySlug="talk-lawyer" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
