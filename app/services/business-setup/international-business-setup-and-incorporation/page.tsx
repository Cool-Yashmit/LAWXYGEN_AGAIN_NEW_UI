import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "International Business Setup & Incorporation | LAWXYGEN",
  description: "International Business Setup & Incorporation service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"International Business Setup & Incorporation"}
      category={"Business Setup"}
      categorySlug={"business-setup"}
      accent={"#2F80ED"}
      pageClassName={styles.servicePage}
    />
  );
}
