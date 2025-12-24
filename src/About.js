import React from 'react'
import Navbar from './componets/ui/Navbar'
import Footer from './componets/ui/Footer'
import ContactAdvisor from './componets/ui/ContactAdvisor'
import image from "../src/assets/images/designer.png"


function About() {
  return (
    <>
    <Navbar/>
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        <div className="flex justify-center">
          <img
            src={image}
            alt="Team working together"
            className="object-contain w-full h-[550px] pr-10"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            About <span className="text-orange-500">Us</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            At Rook Technologies, we believe in building technology that is
            tailored to you. Our mission is to help businesses and individuals 
            turn their ideas into real, working solutions that make life easier.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            From building sleek websites to developing mini systems, apps, and 
            troubleshooting software issues, we’re here to be your trusted partner 
            every step of the way.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="p-4 border rounded-xl shadow-sm bg-white">
              <h3 className="font-semibold text-gray-900"><i class='bxr  bx-sparkles'  ></i>  Our Vision</h3>
              <p className="text-gray-600 mt-2 text-sm">
                To empower businesses and individuals with technology that’s 
                accessible, reliable, and designed to grow with them.
              </p>
            </div>

            <div className="p-4 border rounded-xl shadow-sm bg-white">
              <h3 className="font-semibold text-gray-900"><i class='bxr  bx-handshake bx-md'></i>  Our Promise</h3>
              <p className="text-gray-600 mt-2 text-sm">
                We listen first, then build. Every solution we create is tailored 
                to your needs, not a one-size-fits-all template.
              </p>
            </div>
          </div>

          <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition">
            Let’s Work Together
          </button>
        </div>
      </div>
    </section>
    <ContactAdvisor/>
    <Footer/>
   </>
  )
}

export default About