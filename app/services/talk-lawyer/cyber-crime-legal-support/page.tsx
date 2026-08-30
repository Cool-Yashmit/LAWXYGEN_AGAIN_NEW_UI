export const metadata = {
  title: "Cyber Crime Legal Support | LAWXYGEN",
  description: "Cyber Crime Legal Support — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Cyber Crime Legal Support" category="Talk to a Lawyer" categorySlug="talk-lawyer" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
