import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Well-Known Trademark Application | LAWXYGEN",
  description: "Well-Known Trademark Application service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Well-Known Trademark Application"}
      category={"Intellectual Property"}
      categorySlug={"intellectual-property"}
      accent={"#8B5CF6"}
      pageClassName={styles.servicePage}
    />
  );
}
