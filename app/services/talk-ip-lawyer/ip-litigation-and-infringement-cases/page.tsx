export const metadata = {
  title: "IP Litigation & Infringement Cases | LAWXYGEN",
  description: "IP Litigation & Infringement Cases — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="IP Litigation & Infringement Cases" category="Talk to an IP Lawyer" categorySlug="talk-ip-lawyer" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
