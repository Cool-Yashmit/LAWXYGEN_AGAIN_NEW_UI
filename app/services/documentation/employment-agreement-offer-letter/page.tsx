export const metadata = {
  title: "Employment Agreement / Offer Letter | LAWXYGEN",
  description: "Employment Agreement / Offer Letter — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Employment Agreement / Offer Letter" category="Documentation" categorySlug="documentation" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
