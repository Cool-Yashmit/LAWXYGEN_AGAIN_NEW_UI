export const metadata = {
  title: "Relieving Letter | LAWXYGEN",
  description: "Relieving Letter — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Relieving Letter" category="Documentation" categorySlug="documentation" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
