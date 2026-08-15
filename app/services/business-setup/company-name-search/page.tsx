import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Company Name Search | LAWXYGEN",
  description: "Company Name Search service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Company Name Search"}
      category={"Business Setup"}
      categorySlug={"business-setup"}
      accent={"#2F80ED"}
      pageClassName={styles.servicePage}
    />
  );
}
