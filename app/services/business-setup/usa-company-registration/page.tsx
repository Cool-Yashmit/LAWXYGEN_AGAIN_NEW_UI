export const metadata = {
  title: "USA Company Registration | LAWXYGEN",
  description: "USA Company Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="USA Company Registration" category="Business Setup" categorySlug="business-setup" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
