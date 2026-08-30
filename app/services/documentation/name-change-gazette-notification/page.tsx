export const metadata = {
  title: "Name Change (Gazette Notification) | LAWXYGEN",
  description: "Name Change (Gazette Notification) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Name Change (Gazette Notification)" category="Documentation" categorySlug="documentation" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
