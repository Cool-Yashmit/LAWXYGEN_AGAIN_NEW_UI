import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Startup Fundraising Support | LAWXYGEN",
  description: "Startup Fundraising Support service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Startup Fundraising Support"}
      category={"Business Setup"}
      categorySlug={"business-setup"}
      accent={"#2F80ED"}
      pageClassName={styles.servicePage}
    />
  );
}
