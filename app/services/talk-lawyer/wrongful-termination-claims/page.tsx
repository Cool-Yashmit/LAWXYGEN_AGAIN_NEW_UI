export const metadata = {
  title: "Wrongful Termination Claims | LAWXYGEN",
  description: "Wrongful Termination Claims — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Wrongful Termination Claims" category="Talk to a Lawyer" categorySlug="talk-lawyer" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
