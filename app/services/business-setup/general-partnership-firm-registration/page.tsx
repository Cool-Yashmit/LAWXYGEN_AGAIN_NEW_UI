export const metadata = {
  title: "General Partnership Firm Registration | LAWXYGEN",
  description: "General Partnership Firm Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="General Partnership Firm Registration" category="Business Setup" categorySlug="business-setup" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
