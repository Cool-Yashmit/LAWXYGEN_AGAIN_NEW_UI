export const metadata = {
  title: "Startup & Corporate Legal Advisory | LAWXYGEN",
  description: "Startup & Corporate Legal Advisory — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Startup & Corporate Legal Advisory" category="Talk to a Lawyer" categorySlug="talk-lawyer" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
