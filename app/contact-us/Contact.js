"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {createQuery} from "@/actions/useractions";
const Contact = () => {
  const testimonials = [
    {
      quote:
        "I love how easy Fundspire makes it to receive support from my followers. It’s truly changed the way I connect with my community.",
      author: "– A Fundspire Creator",
    },
    {
      quote:
        "Fundspire helped me turn my passion into income. Simple setup, clean design, and instant payouts — love it!",
      author: "– A Happy Developer",
    },
    {
      quote:
        "As an artist, I’ve always wanted a platform that respects both creators and supporters. Fundspire nailed it.",
      author: "– An Independent Artist",
    },
  ];

  const [index, setIndex] = useState(0);
  const [QueryForm, setQueryForm] = useState({ name: "", email: "", query: "" })

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // switch every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const handlechange = (e) => {
    setQueryForm({ ...QueryForm, [e.target.id]: e.target.value })
  }
  const handlesubmit = async (e) => {
    e.preventDefault();
    await createQuery(QueryForm);
    alert("Query submitted , will get back to you soon!");
    setQueryForm({ name: "", email: "", query: "" });
  }
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-white">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
        Have questions, feedback, or just want to say hello? We’d love to hear from you! Use the form below to write your query or reach us directly through our contact info.
      </p>

      <div className="bg-gray-900/40 border border-gray-700 rounded-xl shadow-lg p-8 md:p-10 grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="space-y-6 " onSubmit={handlesubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={QueryForm.name}
              onChange={handlechange}
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
              value={QueryForm.email}
              onChange={handlechange}
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
              value={QueryForm.query}
              onChange={handlechange}
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
            <div className="flex flex-col gap-2 mt-5 md:flex-row">
              <div className="flex flex-col gap-2 pl-6 text-sm  text-gray-300">
                <a href="#" target="_blank" rel="noopener noreferrer">🌐 Website</a>
                <a href="#" target="_blank" rel="noopener noreferrer">📸 Instagram</a></div>
              <div className="flex flex-col gap-2 pl-6 text-sm  text-gray-300">
                <a href="#" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
                <a href="#" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className=" border-t  border-gray-700 pt-10 h-40 my-[9vh]">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-2xl font-semibold mb-8">Here What Our Users Say ?</h1>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <p className="italic text-gray-400 text-xs md:text-lg mb-2">“{testimonials[index].quote}”</p>
              <p className="text-blue-400 font-medium mb-2">{testimonials[index].author}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Contact;
