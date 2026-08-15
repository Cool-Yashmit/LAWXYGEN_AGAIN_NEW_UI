import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Online Lawyer Consultation | LAWXYGEN",
  description: "Online Lawyer Consultation service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Online Lawyer Consultation"}
      category={"Talk to a Lawyer"}
      categorySlug={"talk-lawyer"}
      accent={"#EF4444"}
      pageClassName={styles.servicePage}
    />
  );
}
