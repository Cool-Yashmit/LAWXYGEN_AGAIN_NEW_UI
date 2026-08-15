import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "IP Litigation & Infringement Cases | LAWXYGEN",
  description: "IP Litigation & Infringement Cases service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"IP Litigation & Infringement Cases"}
      category={"Talk to an IP Lawyer"}
      categorySlug={"talk-ip-lawyer"}
      accent={"#F97316"}
      pageClassName={styles.servicePage}
    />
  );
}
