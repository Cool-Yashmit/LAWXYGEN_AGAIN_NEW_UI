export const metadata = {
  title: "Section 8 Company Registration (Non-Profit / NGO) | LAWXYGEN",
  description: "Section 8 Company Registration (Non-Profit / NGO) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Section 8 Company Registration (Non-Profit / NGO)" category="Business Setup" categorySlug="business-setup" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
