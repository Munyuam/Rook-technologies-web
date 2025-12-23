import React, { useState } from 'react';
import Navbar from './componets/ui/Navbar';
import Footer from './componets/ui/Footer';
import ContactAdvisor from './componets/ui/ContactAdvisor';
import emailjs from "emailjs-com";

function Contact() {
  const [loading, setLoading] = useState(false); 

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true); 

    emailjs.sendForm(
      "service_s7pk88l",
      "template_6t8o1xm",
      e.target,
      "mDNWnopN7w1bqbvy0"
    )
    .then(() => {
      alert('Email sent successfully');
      e.target.reset();
    })
    .catch((error) => {
      console.log("Error: ", error);
      alert('Failed to send email');
    })
    .finally(() => setLoading(false)); 
  }

  return (
    <div>
      <Navbar/>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Let’s <span className="text-orange-500">Connect</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Got an idea, a project, or just a question? We’d love to hear from you.
              Send us a message and we’ll get back to you as soon as possible.
            </p>

            <div className="mt-8 space-y-4">
              <p className="flex items-center gap-3 text-gray-700">
                <i className="bxr bx-mail-open bx-lg" /><span>info.rooktechnologies@gmail.com</span>
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                <i className='bxr bx-mobile bx-lg'></i> <span>+265 880 810 886</span>
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                <i className='bxr bx-location-pin bx-lg'></i> <span>Blantyre, Malawi</span>
              </p>
            </div>
          </div>

          <div className="bg-white border rounded-2xl shadow-sm p-8">
            <form onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-left text-gray-700 font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="mt-2 w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-left text-gray-700 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="mt-2 w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-left text-gray-700 font-medium">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Write your message here..."
                  required
                  className="mt-2 w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center"
                disabled={loading} 
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                ) : null}
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
      <ContactAdvisor/>
      <Footer/>
    </div>
  );
}

export default Contact;
