export const metadata = {
  title: "Banking & Finance Legal Advisory | LAWXYGEN",
  description: "Banking & Finance Legal Advisory — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Banking & Finance Legal Advisory" category="Talk to a Lawyer" categorySlug="talk-lawyer" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
