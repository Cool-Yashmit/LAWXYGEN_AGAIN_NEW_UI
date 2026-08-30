export const metadata = {
  title: "Patent Assignment | LAWXYGEN",
  description: "Patent Assignment — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Patent Assignment" category="Intellectual Property" categorySlug="intellectual-property" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
