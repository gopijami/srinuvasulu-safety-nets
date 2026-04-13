import { services } from "./constants/services";

 function ServicesDetails() {
  return (
    <section className="px-6 py-16 bg-dark text-white">
      <h2 className="text-2xl font-semibold mb-8">
        Our Safety Solutions
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {services.map((service) => (
          <div
            key={service}
            className="bg-glass backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:border-primary transition"
          >
            <p className="text-sm capitalize">
              {service.replaceAll("-", " ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesDetails;