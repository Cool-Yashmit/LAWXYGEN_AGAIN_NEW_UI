import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Director Identification Number (DIN) Registration | LAWXYGEN",
  description: "Director Identification Number (DIN) Registration service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Director Identification Number (DIN) Registration"}
      category={"Business Setup"}
      categorySlug={"business-setup"}
      accent={"#2F80ED"}
      pageClassName={styles.servicePage}
    />
  );
}
