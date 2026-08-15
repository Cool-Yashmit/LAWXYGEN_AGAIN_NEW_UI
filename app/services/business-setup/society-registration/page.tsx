import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Society Registration | LAWXYGEN",
  description: "Society Registration service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Society Registration"}
      category={"Business Setup"}
      categorySlug={"business-setup"}
      accent={"#2F80ED"}
      pageClassName={styles.servicePage}
    />
  );
}
