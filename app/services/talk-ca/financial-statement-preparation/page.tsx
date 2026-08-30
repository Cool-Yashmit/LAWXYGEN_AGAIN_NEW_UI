export const metadata = {
  title: "Financial Statement Preparation | LAWXYGEN",
  description: "Financial Statement Preparation — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Financial Statement Preparation" category="Talk to a CA" categorySlug="talk-ca" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
