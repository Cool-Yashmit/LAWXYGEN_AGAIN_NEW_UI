import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Private Limited Company Registration | LAWXYGEN",
  description: "Private Limited Company Registration service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Private Limited Company Registration"}
      category={"Business Setup"}
      categorySlug={"business-setup"}
      accent={"#2F80ED"}
      pageClassName={styles.servicePage}
    />
  );
}
