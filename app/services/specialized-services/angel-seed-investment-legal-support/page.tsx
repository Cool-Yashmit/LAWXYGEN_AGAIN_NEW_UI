export const metadata = {
  title: "Angel / Seed Investment Legal Support | LAWXYGEN",
  description: "Angel / Seed Investment Legal Support — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="Angel / Seed Investment Legal Support" category="Specialized Services" categorySlug="specialized-services" theme={ 5 } accent="#1b9ac7" pageClassName={styles.servicePage} />;
}
