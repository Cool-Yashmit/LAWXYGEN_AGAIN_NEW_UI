export const metadata = {
  title: "ESOP Design & Implementation | LAWXYGEN",
  description: "ESOP Design & Implementation — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="ESOP Design & Implementation" category="Specialized Services" categorySlug="specialized-services" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
