export const metadata = {
  title: "International Trademark Registration (Madrid Protocol) | LAWXYGEN",
  description: "International Trademark Registration (Madrid Protocol) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="International Trademark Registration (Madrid Protocol)" category="Intellectual Property" categorySlug="intellectual-property" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
