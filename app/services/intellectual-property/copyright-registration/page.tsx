export const metadata = {
  title: "Copyright Registration | LAWXYGEN",
  description: "Copyright Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Copyright Registration" category="Intellectual Property" categorySlug="intellectual-property" theme={ 0 } accent="#2f7cf6" pageClassName={styles.servicePage} />;
}
