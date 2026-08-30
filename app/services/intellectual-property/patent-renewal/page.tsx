export const metadata = {
  title: "Patent Renewal | LAWXYGEN",
  description: "Patent Renewal — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Patent Renewal" category="Intellectual Property" categorySlug="intellectual-property" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
