import React from "react";

function ContactAdvisor() {
  return (
    <section
      className="relative h-72 flex items-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-orange-500/80 to-orange-600/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 w-full">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Got questions? Let’s talk.
          </h2>
          <p className="mt-2 text-white/90 text-lg">
            Our friendly team is here to guide you through any challenge.
          </p>
        </div>

        <div>
          <a
            href="/contact"
            className="bg-white text-orange-600 font-semibold py-3 px-8 rounded-xl shadow-md hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactAdvisor;
