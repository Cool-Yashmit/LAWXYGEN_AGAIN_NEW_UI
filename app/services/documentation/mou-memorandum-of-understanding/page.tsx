import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "MOU (Memorandum of Understanding) | LAWXYGEN",
  description: "MOU (Memorandum of Understanding) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"MOU (Memorandum of Understanding)"}
      category={"Documentation"}
      categorySlug={"documentation"}
      accent={"#F59E0B"}
      pageClassName={styles.servicePage}
    />
  );
}
