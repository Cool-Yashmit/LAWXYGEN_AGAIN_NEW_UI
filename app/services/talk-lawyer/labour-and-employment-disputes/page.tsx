import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Labour & Employment Disputes | LAWXYGEN",
  description: "Labour & Employment Disputes service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Labour & Employment Disputes"}
      category={"Talk to a Lawyer"}
      categorySlug={"talk-lawyer"}
      accent={"#EF4444"}
      pageClassName={styles.servicePage}
    />
  );
}
