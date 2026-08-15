import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "ESOP Design & Implementation | LAWXYGEN",
  description: "ESOP Design & Implementation service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"ESOP Design & Implementation"}
      category={"Specialized Services"}
      categorySlug={"specialized-services"}
      accent={"#EF5DA8"}
      pageClassName={styles.servicePage}
    />
  );
}
