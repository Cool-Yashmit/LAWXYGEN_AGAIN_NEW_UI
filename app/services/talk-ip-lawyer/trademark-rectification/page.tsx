import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Trademark Rectification | LAWXYGEN",
  description: "Trademark Rectification service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Trademark Rectification"}
      category={"Talk to an IP Lawyer"}
      categorySlug={"talk-ip-lawyer"}
      accent={"#F97316"}
      pageClassName={styles.servicePage}
    />
  );
}
