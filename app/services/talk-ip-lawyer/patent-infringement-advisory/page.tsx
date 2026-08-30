export const metadata = {
  title: "Patent Infringement Advisory | LAWXYGEN",
  description: "Patent Infringement Advisory — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Patent Infringement Advisory" category="Talk to an IP Lawyer" categorySlug="talk-ip-lawyer" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
