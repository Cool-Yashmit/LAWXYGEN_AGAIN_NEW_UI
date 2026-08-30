export const metadata = {
  title: "Contract Breach Disputes | LAWXYGEN",
  description: "Contract Breach Disputes — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Contract Breach Disputes" category="Talk to a Lawyer" categorySlug="talk-lawyer" theme={ 0 } accent="#2f7cf6" pageClassName={styles.servicePage} />;
}
