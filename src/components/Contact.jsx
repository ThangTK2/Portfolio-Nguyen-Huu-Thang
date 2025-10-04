import React from "react";
import imghero from "/imghero.png";

export default function Contact() {
  return (
    <section
      id="#contact"
      className="min-h-screen overflow-hidden justify-center flex items-center p-6 mt-10 relative"
    >
      <article className="shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full relative">
        <aside
          data-aos="fade-right"
          data-aos-delay="300"
          className="w-full md:w-1/2 relative flex items-center justify-center"
        >
          {/* Gradient background */}
          <div
            className="absolute z-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-3xl 
                  bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] 
                  shadow-[0_0_70px_rgba(182,0,182,0.7)]"
          ></div>

          {/* Hero Image */}
          <img
            src={imghero}
            alt="Contact illustration"
            className="relative h-[250px] sm:h-[400px] md:h-[485px] w-[250px] sm:w-[400px] md:w-[480px] 
               object-cover rounded-lg z-10"
          />
        </aside>

        {/*Contact Form*/}
        <section
          data-aos="fade-left"
          data-aos-delay="300"
          id="contact"
          className="p-8 w-full md:w-1/2"
        >
          <header className="mb-6">
            <h2 className="text-4xl font-bold text-center text-white">
              Contact Us
            </h2>
          </header>
          <form
            action="https://formspree.io/f/mgvnypjk"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="Message"
                className="block text-gray-300 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
              ></textarea>
            </div>
            <button
              className="cursor-pointer relative w-full text-white border-2 py-2 px-6 rounded-full text-lg 
  overflow-hidden group"
            >
              {/* Background gradient */}
              <span
                className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5]
    transition-all duration-500 ease-out group-hover:w-full"
              ></span>

              {/* Nội dung nút */}
              <span className="relative z-10">Send Message</span>
            </button>
          </form>
        </section>
      </article>
    </section>
  );
}
