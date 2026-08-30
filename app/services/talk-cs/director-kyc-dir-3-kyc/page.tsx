export const metadata = {
  title: "Director KYC (DIR-3 KYC) | LAWXYGEN",
  description: "Director KYC (DIR-3 KYC) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Director KYC (DIR-3 KYC)" category="Talk to a CS" categorySlug="talk-cs" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
