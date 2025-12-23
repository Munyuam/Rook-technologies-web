import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import heroVideo from "../../assets/images/hero-image.mov";

function HeroSection() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-fill
                   brightness-90 contrast-105 saturate-95"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Blue Gradient Overlay */}
      <div
        className="absolute inset-0 
        bg-gradient-to-r 
        from-[#0E4D92]/70 
        via-[#1E88E5]/40 
        to-transparent"
      ></div>

      {/* Soft contrast layer */}
      <div className="absolute inset-0 bg-slate-900/10"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20 text-white max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Helping build the next business enterprises through tech
        </h1>

        <p className="mt-4 text-lg text-white/90">
          Together we can build technologies that have lasting impact
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            to="/services"
            className="flex items-center gap-2
                       bg-orange-500 hover:bg-orange-600
                       text-white font-semibold
                       px-6 py-3 rounded-full
                       transition shadow-lg shadow-orange-500/30"
          >
            View Services <ArrowRight size={18} />
          </Link>

          <Link
            to="/about"
            className="flex items-center gap-2
                       border border-orange-400
                       text-orange-400
                       hover:bg-orange-400 hover:text-white
                       px-6 py-3 rounded-full
                       transition"
          >
            Read About Us <Mail size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
