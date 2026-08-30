export const metadata = {
  title: "Canada Company Registration | LAWXYGEN",
  description: "Canada Company Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Canada Company Registration" category="Business Setup" categorySlug="business-setup" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
