import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "HSN Code Finder | LAWXYGEN",
  description: "HSN Code Finder service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"HSN Code Finder"}
      category={"Specialized Services"}
      categorySlug={"specialized-services"}
      accent={"#EF5DA8"}
      pageClassName={styles.servicePage}
    />
  );
}
