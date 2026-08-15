import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Limited Liability Partnership (LLP) Registration | LAWXYGEN",
  description: "Limited Liability Partnership (LLP) Registration service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Limited Liability Partnership (LLP) Registration"}
      category={"Business Setup"}
      categorySlug={"business-setup"}
      accent={"#2F80ED"}
      pageClassName={styles.servicePage}
    />
  );
}
