import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Venture Capital Funding Legal Support | LAWXYGEN",
  description: "Venture Capital Funding Legal Support service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Venture Capital Funding Legal Support"}
      category={"Specialized Services"}
      categorySlug={"specialized-services"}
      accent={"#EF5DA8"}
      pageClassName={styles.servicePage}
    />
  );
}
