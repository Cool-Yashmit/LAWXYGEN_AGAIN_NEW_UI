export const metadata = {
  title: "DPIIT Recognition for Startups | LAWXYGEN",
  description: "DPIIT Recognition for Startups — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="DPIIT Recognition for Startups" category="Business Setup" categorySlug="business-setup" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
