export const metadata = {
  title: "Franchisee Agreement | LAWXYGEN",
  description: "Franchisee Agreement — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Franchisee Agreement" category="Documentation" categorySlug="documentation" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
