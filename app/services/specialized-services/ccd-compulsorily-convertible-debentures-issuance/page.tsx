import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "CCD (Compulsorily Convertible Debentures) Issuance | LAWXYGEN",
  description: "CCD (Compulsorily Convertible Debentures) Issuance service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"CCD (Compulsorily Convertible Debentures) Issuance"}
      category={"Specialized Services"}
      categorySlug={"specialized-services"}
      accent={"#EF5DA8"}
      pageClassName={styles.servicePage}
    />
  );
}
