export const metadata = {
  title: "CCD (Compulsorily Convertible Debentures) Issuance | LAWXYGEN",
  description: "CCD (Compulsorily Convertible Debentures) Issuance — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="CCD (Compulsorily Convertible Debentures) Issuance" category="Specialized Services" categorySlug="specialized-services" theme={ 1 } accent="#16a47b" pageClassName={styles.servicePage} />;
}
