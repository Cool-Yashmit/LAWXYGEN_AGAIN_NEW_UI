export const metadata = {
  title: "Terms of Service / Privacy Policy (Website) | LAWXYGEN",
  description: "Terms of Service / Privacy Policy (Website) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Terms of Service / Privacy Policy (Website)" category="Documentation" categorySlug="documentation" theme={ 4 } accent="#d85877" pageClassName={styles.servicePage} />;
}
