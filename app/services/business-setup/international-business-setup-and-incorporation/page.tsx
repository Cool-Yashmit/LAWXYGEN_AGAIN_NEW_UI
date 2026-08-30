export const metadata = {
  title: "International Business Setup & Incorporation | LAWXYGEN",
  description: "International Business Setup & Incorporation — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="International Business Setup & Incorporation" category="Business Setup" categorySlug="business-setup" theme={ 0 } accent="#2f7cf6" pageClassName={styles.servicePage} />;
}
