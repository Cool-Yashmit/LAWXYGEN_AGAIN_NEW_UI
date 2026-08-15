import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "DPIIT Recognition for Startups | LAWXYGEN",
  description: "DPIIT Recognition for Startups service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"DPIIT Recognition for Startups"}
      category={"Business Setup"}
      categorySlug={"business-setup"}
      accent={"#2F80ED"}
      pageClassName={styles.servicePage}
    />
  );
}
