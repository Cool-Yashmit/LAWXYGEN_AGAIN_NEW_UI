import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "HSN Code Finder Tool | LAWXYGEN",
  description: "HSN Code Finder Tool service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"HSN Code Finder Tool"}
      category={"Tax & Compliance"}
      categorySlug={"tax-compliance"}
      accent={"#15B87A"}
      pageClassName={styles.servicePage}
    />
  );
}
