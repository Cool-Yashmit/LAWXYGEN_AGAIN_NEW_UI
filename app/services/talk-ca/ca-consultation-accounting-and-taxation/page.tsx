export const metadata = {
  title: "CA Consultation – Accounting & Taxation | LAWXYGEN",
  description: "CA Consultation – Accounting & Taxation — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="CA Consultation – Accounting & Taxation" category="Talk to a CA" categorySlug="talk-ca" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
