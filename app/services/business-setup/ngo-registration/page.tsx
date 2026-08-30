export const metadata = {
  title: "NGO Registration | LAWXYGEN",
  description: "NGO Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="NGO Registration" category="Business Setup" categorySlug="business-setup" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
