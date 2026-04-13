import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ClientServicePage from "./ClientServicePage";
import { buildServicePageData } from "@/app/lib/serviceContent";

type ServiceLocationPageProps = PageProps<"/hyderabad/[service]/[location]">;

export async function generateMetadata(
  props: ServiceLocationPageProps,
): Promise<Metadata> {
  const { service, location } = await props.params;
  const pageData = buildServicePageData(service, location);

  if (!pageData) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${pageData.service.name} in ${pageData.location.name}, Hyderabad`,
    description: `${pageData.service.name} in ${pageData.location.name} with dynamic service details, FAQs, nearby locations, similar products, and premium trust-building design.`,
  };
}

export default async function Page(props: ServiceLocationPageProps) {
  const { service, location } = await props.params;
  const pageData = buildServicePageData(service, location);

  if (!pageData) {
    notFound();
  }

  return <ClientServicePage pageData={pageData} />;
}
