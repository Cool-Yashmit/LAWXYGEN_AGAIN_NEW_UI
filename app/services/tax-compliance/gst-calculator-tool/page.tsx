export const metadata = {
  title: "GST Calculator Tool | LAWXYGEN",
  description: "GST Calculator Tool — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="GST Calculator Tool" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
