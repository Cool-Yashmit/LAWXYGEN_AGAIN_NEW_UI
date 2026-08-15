import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Trademark Infringement Advisory | LAWXYGEN",
  description: "Trademark Infringement Advisory service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Trademark Infringement Advisory"}
      category={"Talk to an IP Lawyer"}
      categorySlug={"talk-ip-lawyer"}
      accent={"#F97316"}
      pageClassName={styles.servicePage}
    />
  );
}
