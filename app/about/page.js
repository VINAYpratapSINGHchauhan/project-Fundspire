import React from "react";

const About = () => {
    return (
        <div className="max-w-5xl mx-auto px-6 py-10">
            <h1 className="text-4xl font-bold text-center mb-8 text-white">About Fundspire</h1>

            {/* Intro Section */}
            <section className="mb-14">
                <p className="text-lg leading-7 text-center text-gray-300 mb-6">
                    Fundspire is a creator-centric platform designed to help you receive direct support from your audience. Whether you're a writer, developer, artist, or educator, Fundspire lets you set up a funding page where fans and followers can show appreciation through donations — we call it “buying a drink” 🍹.
                </p>
            </section>

            {/* Benefits for Creators */}
            <section className="mb-16 border border-gray-500/50 rounded-md p-9">
                <h2 className="text-2xl font-semibold mb-4 text-white">🚀 Benefits for Creators</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <img
                        src="/coin.gif" // avatar gif
                        alt="Creator avatar"
                        className="rounded-xl shadow-md w-full object-contain h-[30vh]"
                    />
                    <div>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Receive funds directly from your audience</li>
                            <li>Customize your profile with images and branding</li>
                            <li>Track your supporters and earnings in real time</li>
                            <li>Zero platform commission — keep what you earn!</li>
                            <li>Simple Razorpay integration for fast payouts</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Benefits for Fans */}
            <section className="mb-16 border border-gray-500/50 rounded-md p-9">
                <h2 className="text-2xl font-semibold mb-6 text-white">🌟 Benefits for Fans</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div>
                        <img
                            src="/group.gif"
                            alt="Support creator gif"
                            className="rounded-xl shadow-md w-full object-contain h-[25vh]"
                        />
                    </div>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Support your favorite creators directly</li>
                        <li>Send tips as small tokens of love</li>
                        <li>Stay updated with your creator’s journey</li>
                        <li>Feel personally connected and involved</li>
                        <li>Make a real impact on someone's creative work</li>
                    </ul>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="mb-16 border border-gray-500/50 rounded-md p-9">
                <h2 className="text-2xl font-semibold mb-6 text-white">📅 Our Journey</h2>
                <ul className="relative border-l-2 border-blue-500 pl-6 space-y-10">
                    <li>
                        <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full"></div>
                        <h3 className="text-lg font-medium text-white">💡 Idea Born – For Project</h3>
                        <p className="text-sm text-gray-400 mt-1">
                            We noticed a lack of desi creator support platforms — especially ones that are flexible, lightweight, and fun. That’s when the spark for Fundspire ignited.
                        </p>
                    </li>
                    <li>
                        <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full"></div>
                        <h3 className="text-lg font-medium text-white">🚀 Beta Launch </h3>
                        <p className="text-sm text-gray-400 mt-1">
                            Our MVP was rolled out to a small group of early creators. The feedback was overwhelming — both in enthusiasm and ideas!
                        </p>
                    </li>
                    <li>
                        <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full"></div>
                        <h3 className="text-lg font-medium text-white">🌟 Public Launch – on Github</h3>
                        <p className="text-sm text-gray-400 mt-1">
                            We launched officially with Razorpay integration, customizable profiles, and the first version of our analytics dashboard.
                        </p>
                    </li>
                    <li>
                        <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full"></div>
                        <h3 className="text-lg font-medium text-white">🔮 What’s Next</h3>
                        <p className="text-sm text-gray-400 mt-1">
                            We’re working on supporter tiers, content unlocks, goal setting, and more ways to engage your fans!
                        </p>
                    </li>
                </ul>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-6 text-white">❓ Frequently Asked Questions</h2>
                <div className="space-y-5">
                    <div>
                        <h3 className="font-medium text-lg text-white">How do I receive payments?</h3>
                        <p className="text-sm text-gray-400 mt-1">
                            Payments are processed securely via Razorpay. You’ll need to enter your Razorpay ID and secret in your dashboard to start receiving funds.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-medium text-lg text-white">Is there any fee?</h3>
                        <p className="text-sm text-gray-400 mt-1">
                            We currently take 0% platform fees — just the standard Razorpay processing charges.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-medium text-lg text-white">Can I customize my profile?</h3>
                        <p className="text-sm text-gray-400 mt-1">
                            Yes! You can change your name, username, profile image, cover image, and more from your dashboard.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-medium text-lg text-white">What kind of creators use Fundspire?</h3>
                        <p className="text-sm text-gray-400 mt-1">
                            Everyone from developers and YouTubers to educators, poets, and musicians! If you create and share — you’re welcome here.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
export const metadata = {
    title: "About - Fundspire",
    description: "Learn about Fundspire, our mission, and how we empower creators to receive direct support from their fans.",
}