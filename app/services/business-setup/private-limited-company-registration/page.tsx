export const metadata = {
  title: "Private Limited Company Registration | LAWXYGEN",
  description: "Private Limited Company Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Private Limited Company Registration" category="Business Setup" categorySlug="business-setup" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
