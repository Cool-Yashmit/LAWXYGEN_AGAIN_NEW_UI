export const metadata = {
  title: "Labour & Employment Disputes | LAWXYGEN",
  description: "Labour & Employment Disputes — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Labour & Employment Disputes" category="Talk to a Lawyer" categorySlug="talk-lawyer" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
