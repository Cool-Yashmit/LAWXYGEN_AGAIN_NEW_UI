export const metadata = {
  title: "Web Development Services for Businesses | LAWXYGEN",
  description: "Web Development Services for Businesses — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Web Development Services for Businesses" category="Business Setup" categorySlug="business-setup" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
