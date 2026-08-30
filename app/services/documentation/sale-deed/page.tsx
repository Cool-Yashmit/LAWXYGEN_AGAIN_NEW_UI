export const metadata = {
  title: "Sale Deed | LAWXYGEN",
  description: "Sale Deed — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Sale Deed" category="Documentation" categorySlug="documentation" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
