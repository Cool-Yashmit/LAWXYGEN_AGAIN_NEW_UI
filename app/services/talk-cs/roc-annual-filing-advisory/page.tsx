export const metadata = {
  title: "ROC Annual Filing Advisory | LAWXYGEN",
  description: "ROC Annual Filing Advisory — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="ROC Annual Filing Advisory" category="Talk to a CS" categorySlug="talk-cs" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
