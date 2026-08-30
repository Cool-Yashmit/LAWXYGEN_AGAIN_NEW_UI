export const metadata = {
  title: "Company Name Search | LAWXYGEN",
  description: "Company Name Search — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Company Name Search" category="Business Setup" categorySlug="business-setup" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
