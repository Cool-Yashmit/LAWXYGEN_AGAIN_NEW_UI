export const metadata = {
  title: "Startup India Recognition | LAWXYGEN",
  description: "Startup India Recognition — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Startup India Recognition" category="Business Setup" categorySlug="business-setup" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
