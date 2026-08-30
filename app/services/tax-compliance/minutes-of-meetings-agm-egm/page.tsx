export const metadata = {
  title: "Minutes of Meetings (AGM / EGM) | LAWXYGEN",
  description: "Minutes of Meetings (AGM / EGM) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Minutes of Meetings (AGM / EGM)" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
