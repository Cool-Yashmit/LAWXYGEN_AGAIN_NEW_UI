export const metadata = {
  title: "RTI Application Drafting | LAWXYGEN",
  description: "RTI Application Drafting — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="RTI Application Drafting" category="Documentation" categorySlug="documentation" theme={ 0 } accent="#2f7cf6" pageClassName={styles.servicePage} />;
}
