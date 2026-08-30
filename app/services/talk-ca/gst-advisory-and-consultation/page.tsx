export const metadata = {
  title: "GST Advisory & Consultation | LAWXYGEN",
  description: "GST Advisory & Consultation — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="GST Advisory & Consultation" category="Talk to a CA" categorySlug="talk-ca" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
