export const metadata = {
  title: "GeM (Government e-Marketplace) Registration | LAWXYGEN",
  description: "GeM (Government e-Marketplace) Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="GeM (Government e-Marketplace) Registration" category="Business Setup" categorySlug="business-setup" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
