export const metadata = {
  title: "Changes in LLP (Name, Partners, Registered Office) | LAWXYGEN",
  description: "Changes in LLP (Name, Partners, Registered Office) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Changes in LLP (Name, Partners, Registered Office)" category="Tax & Compliance" categorySlug="tax-compliance" theme={ 3 } accent="#df8d1e" pageClassName={styles.servicePage} />;
}
