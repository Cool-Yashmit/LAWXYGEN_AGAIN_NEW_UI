import { ServiceCategoryPage } from "@/components/services/ServiceCategoryPage";

export const metadata = {
  title: "Documentation | LAWXYGEN",
  description: "Browse LAWXYGEN Documentation services.",
};

export default function Page() {
  return <ServiceCategoryPage groupSlug="documentation" />;
}
