export const metadata = {
  title: "Investment Pitch Deck Creation | LAWXYGEN",
  description: "Investment Pitch Deck Creation — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Investment Pitch Deck Creation" category="Business Setup" categorySlug="business-setup" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
