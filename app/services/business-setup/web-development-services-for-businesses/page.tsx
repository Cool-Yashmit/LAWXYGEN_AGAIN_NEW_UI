import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Web Development Services for Businesses | LAWXYGEN",
  description: "Web Development Services for Businesses service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Web Development Services for Businesses"}
      category={"Business Setup"}
      categorySlug={"business-setup"}
      accent={"#2F80ED"}
      pageClassName={styles.servicePage}
    />
  );
}
