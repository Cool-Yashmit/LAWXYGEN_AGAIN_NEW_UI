export const metadata = {
  title: "Online Lawyer Consultation | LAWXYGEN",
  description: "Online Lawyer Consultation — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Online Lawyer Consultation" category="Talk to a Lawyer" categorySlug="talk-lawyer" theme={ 0 } accent="#2f7cf6" pageClassName={styles.servicePage} />;
}
