import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Company Secretary (CS) Consultation | LAWXYGEN",
  description: "Company Secretary (CS) Consultation service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Company Secretary (CS) Consultation"}
      category={"Talk to a CS"}
      categorySlug={"talk-cs"}
      accent={"#6366F1"}
      pageClassName={styles.servicePage}
    />
  );
}
