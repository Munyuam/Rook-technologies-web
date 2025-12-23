import React from 'react'
import Navbar from './componets/ui/Navbar'
import Footer from './componets/ui/Footer'
import ContactAdvisor from './componets/ui/ContactAdvisor'

function Services() {
  const services = [
  {
    title: "Web Development",
    description:
      "We create modern websites, whether you’re promoting your business or personal brand.",
    icon: <i className="bx bx-globe-alt"></i>,
    price: "MWK 70,000 - MWK 300,000",
    duration: "2–4 weeks",
    details:
      "Includes up to 5 pages, contact forms, and search engine setup so people can easily find you online.",
  },
  {
    title: "Database Development",
    description:
      "We help you store important data — like contacts, sales, or inventory records",
    icon: <i className="bx bx-database"></i>,
    price: "MWK 70,000 - MWK 100,000",
    duration: "3–6 weeks",
    details:
      "Includes secure database setup, data backups, and easy access tools.",
  },
  {
    title: "App Development",
    description:
      "We build custom mobile and web apps for businesses and individuals",
    icon: <i className="bx bx-mobile-alt"></i>,
    price: "MWK 150,000 - MWK 600,000",
    duration: "4–8 weeks",
    details:
      "Android and web apps tailored to your idea or business, with a clean and simple interface.",
  },
  {
    title: "Software Troubleshooting",
    description:
      "We fix broken apps, repair login or connection issues, and make sure your software runs smoothly again.",
    icon: <i className="bx bx-bolt-circle"></i>,
    price: "MWK 10,000 - MWK 50,000",
    duration: "As needed",
    details:
      "Includes diagnosing errors, reinstalling systems, and recovering lost access or features.",
  },
  {
    title: "Business & Tech Consultation",
    description:
      "Need help improving how you work or sell? We guide you through using technology to save time and reach more people.",
    icon: <i class='bxr  bx-lightbulb-alt-2'  ></i> ,
    price: "MWK 5,000/hr",
    duration: "1–3 sessions",
    details:
      "We help individuals and businesses plan digital strategies, from online sales to system setup.",
  },
  {
    title: "E-Commerce & Online Store Setup",
    description:
      "We help you sell online — whether through a full website or a WhatsApp-based order system.",
    icon: <i className="bx bx-cart"></i>,
    price: "MWK 200,000 - MWK 600,000",
    duration: "4–6 weeks",
    details:
      "Includes product pages, payment systems, and simple order tracking — perfect for small shops or startups.",
  },
];
  return (
    <>
      <Navbar/>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-left md:text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a range of services designed to keep your ideas moving and
            your technology working for you. Here’s how we can help:
          </p>

          {/* Services Grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border rounded-2xl shadow-sm hover:shadow-lg transition p-6 flex flex-col items-left text-left"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-600">{service.description}</p>
                <p className="mt-2 font-semibold text-gray-800">
                  Price: {service.price}
                </p>
                <p className="text-gray-500">Duration: {service.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactAdvisor/>
      <Footer/>
    </>
  );
}

export default Services
