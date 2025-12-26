import post1 from "../assets/images/blog-post-1.png";
import Navbar from "../componets/ui/Navbar";
import ContactAdvisor from "../componets/ui/ContactAdvisor";
import Footer from "../componets/ui/Footer";

export default function WhyBandwidthWorksForMalawi() {
  return (
    <>
      <Navbar />

      <article className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <img
            src={post1}
            alt="Bandwidth reselling in Malawi"
            className="w-full h-auto rounded-sm mb-8"
          />

          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Why We Believe Bandwidth Re-Selling Works for Malawi Communities
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            In Malawi, access to affordable and reliable internet remains a
            major challenge—especially within youth communities where many
            young people are actively seeking online opportunities for learning,
            work, and entrepreneurship.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Bandwidth re-selling presents a practical and scalable solution to
            this problem. By enabling local entrepreneurs to purchase internet
            bandwidth in bulk and resell it to end-users, communities gain access
            to more affordable and flexible connectivity options.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            This model not only empowers small businesses but also stimulates
            local economic growth by improving access to education, information,
            and digital services. Increased competition among service providers
            further leads to better service quality and fairer pricing.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 mt-10">
            What Is Rook Technologies Doing About It?
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Rook Technologies is actively supporting bandwidth re-selling
            initiatives in Malawi by providing technical expertise through the
            development of the <b>BundleYanga</b> mobile application for Android
            devices.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            BundleYanga enables local entrepreneurs to easily purchase, manage,
            and resell data bundles within their communities. The platform is
            designed to simplify bandwidth distribution while creating new
            income opportunities for young people participating in the digital
            economy.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At the same time, telecommunication companies that partner with Rook
            Technologies benefit from increased data sales and expanded market
            reach, creating a sustainable win-win ecosystem.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            <b>Can we make internet access affordable for all Malawians?</b>  
            The short answer is <b>yes</b>. With innovative solutions such as
            bandwidth re-selling and platforms like BundleYanga, we are taking
            meaningful steps toward closing the digital divide and empowering
            communities across Malawi.
          </p>
        </div>
      </article>

      <ContactAdvisor />
      <Footer />
    </>
  );
}
