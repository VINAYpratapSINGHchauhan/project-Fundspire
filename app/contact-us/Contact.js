"use client";
import React from "react";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-white">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
        Have questions, feedback, or just want to say hello? We’d love to hear from you! Use the form below to write your query or reach us directly through our contact info.
      </p>

      <div className="bg-gray-900/40 border border-gray-700 rounded-xl shadow-lg p-8 md:p-10 grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="query" className="block text-sm font-medium mb-1">
              Write your query
            </label>
            <textarea
              id="query"
              rows="5"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your query here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md font-semibold transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">📞 Reach Us</h2>
            <div className="pl-6 text-sm mt-5">
              <p className="text-gray-500">Email: <a href="mailto:support@fundspire.in" className="text-gray-300">support@fundspire.in</a></p>
              <p className="text-gray-500">Phone: <a href="tel:+919958234205" className="text-gray-300">+91 99582 34205</a></p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">🏢 Office</h2>
            <div className=" pl-6 text-sm mt-5">
              <p className="text-gray-300">District Center, Janakpuri West</p>
              <p className="text-gray-300">Delhi, India – 110058</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">🔗 Follow Us</h2>
            <div className="flex">
              <div className="flex flex-col gap-1 pl-6 text-sm mt-5 text-gray-300">
                <a href="#" target="_blank" rel="noopener noreferrer">🌐 Website</a>
                <a href="#" target="_blank" rel="noopener noreferrer">📸 Instagram</a></div>
              <div className="flex flex-col gap-1 pl-6 text-sm mt-5 text-gray-300">
                <a href="#" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
                <a href="#" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
              </div>
            </div>
            
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Contact;
