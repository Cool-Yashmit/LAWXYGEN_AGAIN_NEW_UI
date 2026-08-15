import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Domestic Violence Cases | LAWXYGEN",
  description: "Domestic Violence Cases service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Domestic Violence Cases"}
      category={"Talk to a Lawyer"}
      categorySlug={"talk-lawyer"}
      accent={"#EF4444"}
      pageClassName={styles.servicePage}
    />
  );
}
