export const metadata = {
  title: "Company Secretary (CS) Consultation | LAWXYGEN",
  description: "Company Secretary (CS) Consultation — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Company Secretary (CS) Consultation" category="Talk to a CS" categorySlug="talk-cs" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
