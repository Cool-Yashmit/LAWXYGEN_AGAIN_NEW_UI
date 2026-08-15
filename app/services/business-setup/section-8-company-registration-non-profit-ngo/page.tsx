import { ServicePageShell } from "@/components/services/ServicePageShell";
import styles from "./page.module.css";

export const metadata = {
  title: "Section 8 Company Registration (Non-Profit / NGO) | LAWXYGEN",
  description: "Section 8 Company Registration (Non-Profit / NGO) service page on LAWXYGEN.",
};

export default function Page() {
  return (
    <ServicePageShell
      title={"Section 8 Company Registration (Non-Profit / NGO)"}
      category={"Business Setup"}
      categorySlug={"business-setup"}
      accent={"#2F80ED"}
      pageClassName={styles.servicePage}
    />
  );
}
