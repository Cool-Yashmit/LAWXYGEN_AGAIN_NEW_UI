export const metadata = {
  title: "Limited Liability Partnership (LLP) Registration | LAWXYGEN",
  description: "Limited Liability Partnership (LLP) Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Limited Liability Partnership (LLP) Registration" category="Business Setup" categorySlug="business-setup" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
