export default function Contact() {
  return (
    <section className="px-6 py-16 bg-dark text-white">
      <h2 className="text-2xl mb-6">
        Let’s Secure Your Space
      </h2>

      <form className="space-y-4">
        <input
          className="w-full p-3 bg-glass rounded-xl"
          placeholder="Your Name"
        />
        <input
          className="w-full p-3 bg-glass rounded-xl"
          placeholder="Phone Number"
        />
        <textarea
          className="w-full p-3 bg-glass rounded-xl"
          placeholder="Message"
        />

        <button className="w-full bg-primary text-black py-3 rounded-xl">
          Request Quote
        </button>
      </form>
    </section>
  );
}