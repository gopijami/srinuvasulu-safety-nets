import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ClientServicePage from "./ClientServicePage";
import { buildServicePageData } from "@/app/lib/serviceContent";
import { buildUltraServicePageData } from "@/app/lib/ultra-page-adapter";
import type { UltraClientPageData } from "@/app/lib/ultra-page-adapter";

type ServiceLocationPageProps = {
  params: Promise<{
    service: string;
    location: string;
  }>;
};
type DefaultPageData = NonNullable<ReturnType<typeof buildServicePageData>>;
type RoutePageData = DefaultPageData | UltraClientPageData;

function hasSeoData(
  pageData: RoutePageData,
): pageData is UltraClientPageData {
  return "seo" in pageData && pageData.seo !== undefined;
}

export async function generateMetadata(
  props: ServiceLocationPageProps,
): Promise<Metadata> {
  const { service, location } = await props.params;
  const pageData: RoutePageData | null =
    buildUltraServicePageData(service, location) ?? buildServicePageData(service, location);

  if (!pageData) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: hasSeoData(pageData)
      ? (pageData.seo?.title ?? `${pageData.service.name} in ${pageData.location.name}, Hyderabad`)
      : `${pageData.service.name} in ${pageData.location.name}, Hyderabad`,
    description: hasSeoData(pageData)
      ? (pageData.seo?.metaDescription ??
        `${pageData.service.name} in ${pageData.location.name} with dynamic service details, FAQs, nearby locations, similar products, and premium trust-building design.`)
      : `${pageData.service.name} in ${pageData.location.name} with dynamic service details, FAQs, nearby locations, similar products, and premium trust-building design.`,
  };
}

export default async function Page(props: ServiceLocationPageProps) {
  const { service, location } = await props.params;
  const pageData: RoutePageData | null =
    buildUltraServicePageData(service, location) ?? buildServicePageData(service, location);

  if (!pageData) {
    notFound();
  }

  return <ClientServicePage pageData={pageData} />;
}
