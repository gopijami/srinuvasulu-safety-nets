import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCATIONS, getServiceBySlug } from "@/app/lib/serviceContent";

type ServicePageProps = PageProps<"/hyderabad/[service]">;

export default async function ServicePage(props: ServicePageProps) {
  const { service } = await props.params;
  const serviceData = getServiceBySlug(service);

  if (!serviceData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#090909] px-6 py-28 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.35em] text-orange-300">
          {serviceData.badge}
        </p>
        <h1 className="mt-6 text-4xl font-black sm:text-5xl">
          {serviceData.name}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          {serviceData.heroTitle} {serviceData.heroDescription}
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((location) => (
            <Link
              key={location.slug}
              href={`/hyderabad/${serviceData.slug}/${location.slug}`}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 text-slate-200 transition hover:border-orange-300 hover:text-white"
            >
              {serviceData.shortName} in {location.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
