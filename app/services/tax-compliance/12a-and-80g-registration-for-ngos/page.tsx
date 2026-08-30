export const metadata = {
  title: "12A & 80G Registration for NGOs | LAWXYGEN",
  description: "12A & 80G Registration for NGOs — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="12A & 80G Registration for NGOs" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
