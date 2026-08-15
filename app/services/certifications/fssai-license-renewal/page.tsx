import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "FSSAI License Renewal | LAWXYGEN",
  description: "FSSAI License Renewal service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"FSSAI License Renewal"}
      category={"Certifications"}
      categorySlug={"certifications"}
      accent={"#06B6D4"}
      pageClassName={styles.servicePage}
    />
  );
}
