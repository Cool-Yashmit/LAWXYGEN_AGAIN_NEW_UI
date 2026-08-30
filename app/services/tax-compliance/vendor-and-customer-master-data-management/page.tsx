export const metadata = {
  title: "Vendor & Customer Master Data Management | LAWXYGEN",
  description: "Vendor & Customer Master Data Management — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Vendor & Customer Master Data Management" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
