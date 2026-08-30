export const metadata = {
  title: "RBI Compliance for Foreign Investment (FDI / FPI) | LAWXYGEN",
  description: "RBI Compliance for Foreign Investment (FDI / FPI) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="RBI Compliance for Foreign Investment (FDI / FPI)" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
