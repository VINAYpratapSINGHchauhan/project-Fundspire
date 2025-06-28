"use client"
import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">About Fundspire</h1>

      {/* Intro Section */}
      <section className="mb-14">
        <p className="text-lg leading-7 text-gray-300 mb-6">
          Fundspire is a creator-centric platform designed to help you receive direct support from your audience. Whether you're a writer, developer, artist, or educator, Fundspire lets you set up a funding page where fans and followers can show appreciation through donations — we call it “buying a drink” 🍹.
        </p>
        <img
          src="/about-intro.jpg"
          alt="Creators supported on Fundspire"
          className="rounded-xl shadow-md w-full object-cover max-h-[400px]"
        />
      </section>

      {/* Timeline Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Our Journey</h2>
        <ul className="relative border-l-2 border-blue-500 pl-6 space-y-10">
          <li>
            <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full"></div>
            <h3 className="text-lg font-medium">💡 Idea Born – Jan 2024</h3>
            <p className="text-sm text-gray-400 mt-1">
              We noticed a lack of desi creator support platforms — especially ones that are flexible, lightweight, and fun. That’s when the spark for Fundspire ignited.
            </p>
          </li>
          <li>
            <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full"></div>
            <h3 className="text-lg font-medium">🚀 Beta Launch – Apr 2024</h3>
            <p className="text-sm text-gray-400 mt-1">
              Our MVP was rolled out to a small group of early creators. The feedback was overwhelming — both in enthusiasm and ideas!
            </p>
          </li>
          <li>
            <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full"></div>
            <h3 className="text-lg font-medium">🌟 Public Launch – Jun 2024</h3>
            <p className="text-sm text-gray-400 mt-1">
              We launched officially with Razorpay integration, customizable profiles, and the first version of our analytics dashboard.
            </p>
          </li>
          <li>
            <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full"></div>
            <h3 className="text-lg font-medium">🔮 What’s Next</h3>
            <p className="text-sm text-gray-400 mt-1">
              We’re working on supporter tiers, content unlocks, goal setting, and more ways to engage your fans!
            </p>
          </li>
        </ul>
        <img
          src="/timeline-img.jpg"
          alt="Fundspire roadmap"
          className="rounded-xl shadow-md mt-8 w-full object-cover max-h-[400px]"
        />
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-5">
          <div>
            <h3 className="font-medium text-lg">❓ How do I receive payments?</h3>
            <p className="text-sm text-gray-400 mt-1">
              Payments are processed securely via Razorpay. You’ll need to enter your Razorpay ID and secret in your dashboard to start receiving funds.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg">❓ Is there any fee?</h3>
            <p className="text-sm text-gray-400 mt-1">
              We currently take 0% platform fees — just the standard Razorpay processing charges.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg">❓ Can I customize my profile?</h3>
            <p className="text-sm text-gray-400 mt-1">
              Yes! You can change your name, username, profile image, cover image, and more from your dashboard.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg">❓ What kind of creators use Fundspire?</h3>
            <p className="text-sm text-gray-400 mt-1">
              Everyone from developers and YouTubers to educators, poets, and musicians! If you create and share — you’re welcome here.
            </p>
          </div>
        </div>
        <img
          src="/faq-support.jpg"
          alt="FAQs"
          className="rounded-xl shadow-md mt-10 w-full object-cover max-h-[400px]"
        />
      </section>
    </div>
  );
};

export default About;
