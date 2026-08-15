import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "OSP (Other Service Provider) License | LAWXYGEN",
  description: "OSP (Other Service Provider) License service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"OSP (Other Service Provider) License"}
      category={"Certifications"}
      categorySlug={"certifications"}
      accent={"#06B6D4"}
      pageClassName={styles.servicePage}
    />
  );
}
