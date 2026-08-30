export const metadata = {
  title: "Income Tax Audit (Section 44AB) | LAWXYGEN",
  description: "Income Tax Audit (Section 44AB) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Income Tax Audit (Section 44AB)" category="Talk to a CA" categorySlug="talk-ca" theme={ 0 } accent="#2f7cf6" pageClassName={styles.servicePage} />;
}
