import { ServiceCategoryPage } from "@/components/services/ServiceCategoryPage";

export const metadata = {
  title: "Specialized Services | LAWXYGEN",
  description: "Browse LAWXYGEN Specialized Services services.",
};

export default function Page() {
  return <ServiceCategoryPage groupSlug="specialized-services" />;
}
