export const metadata = {
  title: "Patent Drafting & Strategy | LAWXYGEN",
  description: "Patent Drafting & Strategy — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Patent Drafting & Strategy" category="Talk to an IP Lawyer" categorySlug="talk-ip-lawyer" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
