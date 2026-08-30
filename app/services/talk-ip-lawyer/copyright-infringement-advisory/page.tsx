export const metadata = {
  title: "Copyright Infringement Advisory | LAWXYGEN",
  description: "Copyright Infringement Advisory — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Copyright Infringement Advisory" category="Talk to an IP Lawyer" categorySlug="talk-ip-lawyer" theme={ 0 } accent="#2f7cf6" pageClassName={styles.servicePage} />;
}
