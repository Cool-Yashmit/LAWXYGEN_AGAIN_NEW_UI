export const metadata = {
  title: "Income Tax Notice Reply / Assessment Support | LAWXYGEN",
  description: "Income Tax Notice Reply / Assessment Support — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Income Tax Notice Reply / Assessment Support" category="Talk to a CA" categorySlug="talk-ca" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
