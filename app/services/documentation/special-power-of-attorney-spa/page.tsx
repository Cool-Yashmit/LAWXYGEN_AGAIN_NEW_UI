export const metadata = {
  title: "Special Power of Attorney (SPA) | LAWXYGEN",
  description: "Special Power of Attorney (SPA) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Special Power of Attorney (SPA)" category="Documentation" categorySlug="documentation" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
