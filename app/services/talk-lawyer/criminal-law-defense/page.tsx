import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Criminal Law Defense | LAWXYGEN",
  description: "Criminal Law Defense service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Criminal Law Defense"}
      category={"Talk to a Lawyer"}
      categorySlug={"talk-lawyer"}
      accent={"#EF4444"}
      pageClassName={styles.servicePage}
    />
  );
}
