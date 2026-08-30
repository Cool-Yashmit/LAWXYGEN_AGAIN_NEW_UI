export const metadata = {
  title: "Digital Signature Certificate (DSC) | LAWXYGEN",
  description: "Digital Signature Certificate (DSC) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Digital Signature Certificate (DSC)" category="Business Setup" categorySlug="business-setup" theme={ 0 } accent="#2f7cf6" pageClassName={styles.servicePage} />;
}
