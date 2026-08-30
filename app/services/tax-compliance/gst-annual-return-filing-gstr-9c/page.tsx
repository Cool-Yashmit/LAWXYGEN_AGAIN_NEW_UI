export const metadata = {
  title: "GST Annual Return Filing (GSTR-9C) | LAWXYGEN",
  description: "GST Annual Return Filing (GSTR-9C) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="GST Annual Return Filing (GSTR-9C)" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
