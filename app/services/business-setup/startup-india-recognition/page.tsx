import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Startup India Recognition | LAWXYGEN",
  description: "Startup India Recognition service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Startup India Recognition"}
      category={"Business Setup"}
      categorySlug={"business-setup"}
      accent={"#2F80ED"}
      pageClassName={styles.servicePage}
    />
  );
}
