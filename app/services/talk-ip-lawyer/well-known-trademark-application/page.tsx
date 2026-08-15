import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Well-Known Trademark Application | LAWXYGEN",
  description: "Well-Known Trademark Application service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Well-Known Trademark Application"}
      category={"Talk to an IP Lawyer"}
      categorySlug={"talk-ip-lawyer"}
      accent={"#F97316"}
      pageClassName={styles.servicePage}
    />
  );
}
