export const metadata = {
  title: "Design Renewal | LAWXYGEN",
  description: "Design Renewal — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Design Renewal" category="Intellectual Property" categorySlug="intellectual-property" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
