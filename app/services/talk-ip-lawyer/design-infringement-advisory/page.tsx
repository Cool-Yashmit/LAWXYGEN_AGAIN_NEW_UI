export const metadata = {
  title: "Design Infringement Advisory | LAWXYGEN",
  description: "Design Infringement Advisory — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Design Infringement Advisory" category="Talk to an IP Lawyer" categorySlug="talk-ip-lawyer" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
