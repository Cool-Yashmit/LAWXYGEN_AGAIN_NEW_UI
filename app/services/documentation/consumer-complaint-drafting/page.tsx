export const metadata = {
  title: "Consumer Complaint Drafting | LAWXYGEN",
  description: "Consumer Complaint Drafting — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Consumer Complaint Drafting" category="Documentation" categorySlug="documentation" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
