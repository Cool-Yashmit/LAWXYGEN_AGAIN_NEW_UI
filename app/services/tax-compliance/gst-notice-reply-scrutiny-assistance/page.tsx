export const metadata = {
  title: "GST Notice Reply / Scrutiny Assistance | LAWXYGEN",
  description: "GST Notice Reply / Scrutiny Assistance — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="GST Notice Reply / Scrutiny Assistance" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
