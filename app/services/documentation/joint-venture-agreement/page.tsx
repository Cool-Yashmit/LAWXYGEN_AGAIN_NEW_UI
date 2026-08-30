export const metadata = {
  title: "Joint Venture Agreement | LAWXYGEN",
  description: "Joint Venture Agreement — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Joint Venture Agreement" category="Documentation" categorySlug="documentation" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
