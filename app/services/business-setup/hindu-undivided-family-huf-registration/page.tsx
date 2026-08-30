export const metadata = {
  title: "Hindu Undivided Family (HUF) Registration | LAWXYGEN",
  description: "Hindu Undivided Family (HUF) Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Hindu Undivided Family (HUF) Registration" category="Business Setup" categorySlug="business-setup" theme={ 0 } accent="#2f7cf6" pageClassName={styles.servicePage} />;
}
