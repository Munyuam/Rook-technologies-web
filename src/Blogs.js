import Navbar from "./componets/ui/Navbar";
import Footer from "./componets/ui/Footer";
import post1 from "./assets/images/blog-post-1.png";
import { Link } from "react-router-dom";
import ContactAdvisor from "./componets/ui/ContactAdvisor";

export default function Blogs() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-white">
        {/* Header section with orange theme */}
        <div className="bg-orange-50 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
            Innovative Talks and Insights
          </h1>
          <p className="mt-4 text-center text-gray-600 text-lg max-w-2xl mx-auto">
            Exploring ideas, trends, and solutions driving digital transformation
          </p>
        </div>

        <div className="container mx-auto px-6 mt-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/blogs/why-bandwidth-reselling-works-for-malawi" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={post1}
                    alt="post-1 image"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                    Why We Believe Bandwidth Re-Selling Works for Malawi Communities
                  </h2>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-2">
                    Exploring the impact of community-driven connectivity and affordable internet solutions.
                  </p>
                  <div className="mt-6 flex items-center text-orange-500 font-bold text-sm">
                    Read Full Story <i className="bx bx-right-arrow-alt text-xl ml-1"></i>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <ContactAdvisor />
      <Footer />
    </>
  );
}
