export const metadata = {
  title: "Design Search | LAWXYGEN",
  description: "Design Search — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Design Search" category="Intellectual Property" categorySlug="intellectual-property" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
