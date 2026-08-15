import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Real Estate Legal Advisory | LAWXYGEN",
  description: "Real Estate Legal Advisory service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Real Estate Legal Advisory"}
      category={"Talk to a Lawyer"}
      categorySlug={"talk-lawyer"}
      accent={"#EF4444"}
      pageClassName={styles.servicePage}
    />
  );
}
