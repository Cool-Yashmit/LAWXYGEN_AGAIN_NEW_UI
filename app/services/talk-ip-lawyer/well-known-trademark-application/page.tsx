export const metadata = {
  title: "Well-Known Trademark Application | LAWXYGEN",
  description: "Well-Known Trademark Application — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Well-Known Trademark Application" category="Talk to an IP Lawyer" categorySlug="talk-ip-lawyer" theme={ 0 } accent="#2f7cf6" pageClassName={styles.servicePage} />;
}
