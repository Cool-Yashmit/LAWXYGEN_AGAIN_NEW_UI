export const metadata = {
  title: "Consumer Disputes | LAWXYGEN",
  description: "Consumer Disputes — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Consumer Disputes" category="Talk to a Lawyer" categorySlug="talk-lawyer" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
