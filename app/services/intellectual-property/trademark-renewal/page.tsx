export const metadata = {
  title: "Trademark Renewal | LAWXYGEN",
  description: "Trademark Renewal — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Trademark Renewal" category="Intellectual Property" categorySlug="intellectual-property" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
