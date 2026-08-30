export const metadata = {
  title: "GST Return Filing (GSTR-1, GSTR-3B, GSTR-9) | LAWXYGEN",
  description: "GST Return Filing (GSTR-1, GSTR-3B, GSTR-9) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="GST Return Filing (GSTR-1, GSTR-3B, GSTR-9)" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
