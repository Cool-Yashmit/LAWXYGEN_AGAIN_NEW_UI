export const metadata = {
  title: "GST Audit Support | LAWXYGEN",
  description: "GST Audit Support — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="GST Audit Support" category="Talk to a CA" categorySlug="talk-ca" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
