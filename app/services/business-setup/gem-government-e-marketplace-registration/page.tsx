import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "GeM (Government e-Marketplace) Registration | LAWXYGEN",
  description: "GeM (Government e-Marketplace) Registration service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"GeM (Government e-Marketplace) Registration"}
      category={"Business Setup"}
      categorySlug={"business-setup"}
      accent={"#2F80ED"}
      pageClassName={styles.servicePage}
    />
  );
}
