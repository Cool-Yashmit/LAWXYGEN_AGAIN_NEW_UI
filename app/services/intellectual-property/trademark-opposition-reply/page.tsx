export const metadata = {
  title: "Trademark Opposition Reply | LAWXYGEN",
  description: "Trademark Opposition Reply — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Trademark Opposition Reply" category="Intellectual Property" categorySlug="intellectual-property" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
