import Navbar from "./componets/ui/Navbar";
import Footer from "./componets/ui/Footer";
import post1 from "./assets/images/blog-post-1.png";
import { Link } from "react-router-dom";
import ContactAdvisor from "./componets/ui/ContactAdvisor";

export default function Blogs() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-white py-8">
        <div className="bg-blue-100 py-12">
          <h1 className="text-4xl font-bold text-center text-gray-900">
            Innovative Talks and Insights
          </h1>
          <p className="mt-3 text-center text-gray-500 text-lg">
            Exploring ideas, trends, and solutions driving digital transformation
          </p>
        </div>

        <div className="container mx-auto px-4 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <Link to="/blogs/why-bandwidth-reselling-works-for-malawi" className="block">
              <div className="bg-white p-1 rounded-sm cursor-pointer hover:shadow-md transition">
                <img
                  src={post1}
                  alt="post-1 image"
                  className="w-full h-48 object-cover rounded-sm mb-4"
                />
                <div className="px-4 py-1">
                  <h2 className="text-xl font-semibold mb-2">
                    Why We Believe Bandwidth Re-Selling Works for Malawi Communities
                  </h2>
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
