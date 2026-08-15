import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Property Disputes & Eviction Cases | LAWXYGEN",
  description: "Property Disputes & Eviction Cases service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Property Disputes & Eviction Cases"}
      category={"Talk to a Lawyer"}
      categorySlug={"talk-lawyer"}
      accent={"#EF4444"}
      pageClassName={styles.servicePage}
    />
  );
}
