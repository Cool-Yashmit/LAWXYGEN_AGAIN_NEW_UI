export const metadata = {
  title: "Gratuity Planning | LAWXYGEN",
  description: "Gratuity Planning — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Gratuity Planning" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 0 } accent="#2f7cf6" pageClassName={styles.servicePage} />;
}
