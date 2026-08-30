export const metadata = {
  title: "Conversion of Business Structure | LAWXYGEN",
  description: "Conversion of Business Structure — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Conversion of Business Structure" category="Talk to a CS" categorySlug="talk-cs" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
