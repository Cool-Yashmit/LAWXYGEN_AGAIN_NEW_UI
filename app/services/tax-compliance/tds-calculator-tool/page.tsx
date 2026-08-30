export const metadata = {
  title: "TDS Calculator Tool | LAWXYGEN",
  description: "TDS Calculator Tool — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="TDS Calculator Tool" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
