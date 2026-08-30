export const metadata = {
  title: "Patent Search | LAWXYGEN",
  description: "Patent Search — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Patent Search" category="Intellectual Property" categorySlug="intellectual-property" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
