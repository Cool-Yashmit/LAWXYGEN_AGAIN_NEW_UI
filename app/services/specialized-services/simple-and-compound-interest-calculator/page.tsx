export const metadata = {
  title: "Simple & Compound Interest Calculator | LAWXYGEN",
  description: "Simple & Compound Interest Calculator — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Simple & Compound Interest Calculator" category="Specialized Services" categorySlug="specialized-services" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
