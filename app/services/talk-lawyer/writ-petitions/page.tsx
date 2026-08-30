export const metadata = {
  title: "Writ Petitions | LAWXYGEN",
  description: "Writ Petitions — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Writ Petitions" category="Talk to a Lawyer" categorySlug="talk-lawyer" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
