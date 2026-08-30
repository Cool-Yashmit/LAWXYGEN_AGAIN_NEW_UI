export const metadata = {
  title: "MOU (Memorandum of Understanding) | LAWXYGEN",
  description: "MOU (Memorandum of Understanding) — a focused LAWXYGEN service journey.",
};

import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export default function Page() {
  return <ServicePageShell title="MOU (Memorandum of Understanding)" category="Documentation" categorySlug="documentation" theme={ 2 } accent="#7958ee" pageClassName={styles.servicePage} />;
}
