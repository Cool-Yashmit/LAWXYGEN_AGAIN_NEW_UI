export const metadata = {
  title: "Producer Company Registration | LAWXYGEN",
  description: "Producer Company Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Producer Company Registration" category="Business Setup" categorySlug="business-setup" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
