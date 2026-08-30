export const metadata = {
  title: "Industrial Design Registration | LAWXYGEN",
  description: "Industrial Design Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Industrial Design Registration" category="Intellectual Property" categorySlug="intellectual-property" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
