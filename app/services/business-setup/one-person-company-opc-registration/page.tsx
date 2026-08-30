export const metadata = {
  title: "One Person Company (OPC) Registration | LAWXYGEN",
  description: "One Person Company (OPC) Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="One Person Company (OPC) Registration" category="Business Setup" categorySlug="business-setup" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
