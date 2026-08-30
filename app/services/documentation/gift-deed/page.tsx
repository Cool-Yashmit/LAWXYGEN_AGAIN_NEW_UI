export const metadata = {
  title: "Gift Deed | LAWXYGEN",
  description: "Gift Deed — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Gift Deed" category="Documentation" categorySlug="documentation" theme={ 0 } accent="#2f7cf6" pageClassName={styles.servicePage} />;
}
