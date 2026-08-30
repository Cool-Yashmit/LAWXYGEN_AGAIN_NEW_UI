export const metadata = {
  title: "Trademark Registration (Indian) | LAWXYGEN",
  description: "Trademark Registration (Indian) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Trademark Registration (Indian)" category="Intellectual Property" categorySlug="intellectual-property" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
