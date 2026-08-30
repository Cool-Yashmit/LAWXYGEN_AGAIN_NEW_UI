export const metadata = {
  title: "Real Estate Legal Advisory | LAWXYGEN",
  description: "Real Estate Legal Advisory — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Real Estate Legal Advisory" category="Talk to a Lawyer" categorySlug="talk-lawyer" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
