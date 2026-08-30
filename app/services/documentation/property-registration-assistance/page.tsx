export const metadata = {
  title: "Property Registration Assistance | LAWXYGEN",
  description: "Property Registration Assistance — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Property Registration Assistance" category="Documentation" categorySlug="documentation" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
