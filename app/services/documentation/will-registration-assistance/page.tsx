export const metadata = {
  title: "Will Registration Assistance | LAWXYGEN",
  description: "Will Registration Assistance — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Will Registration Assistance" category="Documentation" categorySlug="documentation" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
