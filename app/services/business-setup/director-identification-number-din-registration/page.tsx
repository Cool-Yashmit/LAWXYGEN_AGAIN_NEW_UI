export const metadata = {
  title: "Director Identification Number (DIN) Registration | LAWXYGEN",
  description: "Director Identification Number (DIN) Registration — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Director Identification Number (DIN) Registration" category="Business Setup" categorySlug="business-setup" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
