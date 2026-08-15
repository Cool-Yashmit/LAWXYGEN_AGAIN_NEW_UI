import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Patent Drafting & Strategy | LAWXYGEN",
  description: "Patent Drafting & Strategy service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Patent Drafting & Strategy"}
      category={"Talk to an IP Lawyer"}
      categorySlug={"talk-ip-lawyer"}
      accent={"#F97316"}
      pageClassName={styles.servicePage}
    />
  );
}
