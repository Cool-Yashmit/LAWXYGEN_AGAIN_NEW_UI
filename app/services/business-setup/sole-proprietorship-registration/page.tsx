export const metadata = {
  title: "Sole Proprietorship Registration | LAWXYGEN",
  description: "Sole Proprietorship Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Sole Proprietorship Registration" category="Business Setup" categorySlug="business-setup" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
