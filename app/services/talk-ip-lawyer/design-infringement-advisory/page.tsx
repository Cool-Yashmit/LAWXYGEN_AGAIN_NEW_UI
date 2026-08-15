import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Design Infringement Advisory | LAWXYGEN",
  description: "Design Infringement Advisory service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Design Infringement Advisory"}
      category={"Talk to an IP Lawyer"}
      categorySlug={"talk-ip-lawyer"}
      accent={"#F97316"}
      pageClassName={styles.servicePage}
    />
  );
}
