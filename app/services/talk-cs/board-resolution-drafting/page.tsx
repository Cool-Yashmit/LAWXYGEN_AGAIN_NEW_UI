export const metadata = {
  title: "Board Resolution Drafting | LAWXYGEN",
  description: "Board Resolution Drafting — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Board Resolution Drafting" category="Talk to a CS" categorySlug="talk-cs" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
