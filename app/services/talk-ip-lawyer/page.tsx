import { ServiceCategoryPage } from "@/components/services/ServiceCategoryPage";

export const metadata = {
  title: "Talk to an IP Lawyer | LAWXYGEN",
  description: "Browse LAWXYGEN Talk to an IP Lawyer services.",
};

export default function Page() {
  return <ServiceCategoryPage groupSlug="talk-ip-lawyer" />;
}
