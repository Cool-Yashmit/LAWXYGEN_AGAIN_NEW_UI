export const metadata = {
  title: "Trademark Objection Reply | LAWXYGEN",
  description: "Trademark Objection Reply — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Trademark Objection Reply" category="Talk to an IP Lawyer" categorySlug="talk-ip-lawyer" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
