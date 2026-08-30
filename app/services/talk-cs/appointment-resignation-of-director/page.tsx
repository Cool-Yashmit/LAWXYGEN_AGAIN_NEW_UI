export const metadata = {
  title: "Appointment / Resignation of Director | LAWXYGEN",
  description: "Appointment / Resignation of Director — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Appointment / Resignation of Director" category="Talk to a CS" categorySlug="talk-cs" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
