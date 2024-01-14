import React from "react";

const ContactUs = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          {/* Contact Information */}
          <div className="w-full lg:w-1/2 p-6 text-white">
            <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
            <div className="mb-4">
              <p className="text-white">
                <span className="text-white font-semibold">Email:</span>{" "}
                Support@viracore.org
              </p>
            </div>
            <div className="mb-4">
              <p className="text-white">
                <span className=" font-semibold">Phone:</span>+1 807 237 0011
              </p>
            </div>
            <div>
              <p className="">
                <span className=" font-semibold">Location:</span> 18 Berry
                drive, Red Lake, Ontario, P0V2M0, Canada
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 p-6">
            <h2 className="text-3xl text-white font-semibold mb-6">
              Contact Us
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-white font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-white font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-white font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-9 py-3 w-full bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
