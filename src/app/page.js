"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Home() {
  const handleRedirect = () => {
    window.location.href = "https://guptaswitchgears.com";
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900">

      {/* Hero */}
      <section className="text-center px-4 py-16 relative">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/logoOG.jpeg"
            alt="Gupta Switchgears Logo"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-3">
            Welcome to ACBDealer.com
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            India&apos;s #1 dealer of Air Circuit Breakers from trusted brands like L&T, Schneider, Siemens, Laurnz Kudsen and many more.          </p>
          <div className="mt-6">
            <button
              onClick={handleRedirect}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-full shadow-lg transition-all"
            >
              Explore Now
            </button>
          </div>
        </div>
        {/* Tagline badge */}
        <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-1 text-xs rounded-full shadow-md">
          🇮🇳 India’s #1 ACB Dealer
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8 text-blue-800">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "All Major Brands",
                desc: "From L&T to Schneider and Siemens, we deal in every top ACB brand in India.",
              },
              {
                title: "Pan India Delivery",
                desc: "We ship ACBs across all Indian states safely and quickly.",
              },
              {
                title: "Decades of Experience",
                desc: "We are a trusted name in electrical solutions through Gupta Switchgears.",
              },
            ].map((f, i) => (
              <div key={i} className="p-6 bg-blue-50 rounded-xl shadow-sm">
                <CheckCircle className="text-green-600 w-6 h-6 mb-2" />
                <h3 className="font-semibold text-lg text-blue-900">{f.title}</h3>
                <p className="text-sm text-gray-700 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-100 to-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-8">Top Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["ACBs", "Breakers & Relays", "Spare Parts"].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all border border-gray-200"
              >
                <Image
                  src={`/category-${i + 1}.png`}
                  alt={item}
                  width={48}
                  height={48}
                  className="mx-auto mb-2"
                />
                <h3 className="font-medium text-lg text-blue-700">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl font-semibold mb-6 text-blue-900">Trusted Brands</h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { src: "/ltLogo.png", alt: "L&T" },
              { src: "/schnieder.jpg", alt: "Schneider" },
              { src: "/siemens.jpg", alt: "Siemens" },
              { src: "/lk.jpg", alt: "Laurnz Kudsen" },
            ].map((b, i) => (
              <Image
                key={i}
                src={b.src}
                alt={b.alt}
                width={100}
                height={50}
                className="grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to buy ACBs?</h2>
        <p className="mb-6 text-lg">
          Visit our store now to explore all available Air Circuit Breakers and more.
        </p>
        <button
          onClick={handleRedirect}
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Go to GuptaSwitchgears.com
        </button>
      </section>

      {/* WhatsApp Widget */}
      <a
        href="https://api.whatsapp.com/send/?phone=9717419853&text=I+have+an+Enquiry+from+ACBDealer.com.&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <Image
          src="/whatsappLogo.png"
          alt="Chat on WhatsApp"
          width={60}
          height={60}
          className="hover:scale-110 transition-transform duration-200"
        />
      </a>
    </main>
  );
}
