export const metadata = {
  title: "UK Company Registration | LAWXYGEN",
  description: "UK Company Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="UK Company Registration" category="Business Setup" categorySlug="business-setup" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
