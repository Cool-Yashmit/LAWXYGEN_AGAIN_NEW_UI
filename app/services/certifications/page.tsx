import { ServiceCategoryPage } from "@/components/services/ServiceCategoryPage";

export const metadata = {
  title: "Certifications | LAWXYGEN",
  description: "Browse LAWXYGEN Certifications services.",
};

export default function Page() {
  return <ServiceCategoryPage groupSlug="certifications" />;
}
