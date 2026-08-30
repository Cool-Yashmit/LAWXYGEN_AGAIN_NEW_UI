export const metadata = {
  title: "Partnership Deed Drafting | LAWXYGEN",
  description: "Partnership Deed Drafting — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Partnership Deed Drafting" category="Documentation" categorySlug="documentation" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
