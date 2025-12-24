import React from "react";
import { CheckCircle } from "lucide-react";
import image from "../../assets/images/image1.png"

const WhyUs = () => {
  return (
    <section className="py-20 my-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div className="relative rounded-2xl overflow-hidden shadow-none">

          <img
            src={image}
            alt="Team working together"
            className="object-contain w-full h-[450px]"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why <span className="text-orange-600">Choose Us?</span>
          </h2>
         <div className="text-gray-700 leading-relaxed">
          <p className="mb-6">
            We’re a young software development business with one clear goal:{" "}
            to make technology work for <span className="font-semibold">small and medium businesses</span>.  
            Whether you’re running a shop, a startup, or building your first big idea, 
            we help you achieve that with <span className="text-orange-600 font-medium">easy</span>.
          </p>
          <p className="mb-8 flex items-start gap-3">
            <i className="bxr  bx-layers text-orange-600 text-2xl mt-1"></i>
            <span>
              With an Agile development approach, we make sure your project delivers value fast,
              adapts quickly to feedback, and stays on time and on budget
            </span>
          </p>
</div>


          <div className="grid grid-cols-2 gap-5 mb-8">
            {[
              "Fair and affordable",
              "Research-driven approach",
              "Scalable solutions",
              "Built for small businesses",
            ].map((point, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="text-orange-600 w-5 h-5" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div>
            <a
              href="/about"
              className="bg-orange-600 text-white px-6 py-4 rounded-xl shadow-sm hover:bg-orange-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
