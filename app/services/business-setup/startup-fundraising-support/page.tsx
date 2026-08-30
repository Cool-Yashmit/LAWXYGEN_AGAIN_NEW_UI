export const metadata = {
  title: "Startup Fundraising Support | LAWXYGEN",
  description: "Startup Fundraising Support — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Startup Fundraising Support" category="Business Setup" categorySlug="business-setup" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
