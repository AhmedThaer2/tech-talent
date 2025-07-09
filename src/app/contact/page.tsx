"use client";

import {
  Shield,
  MapPin,
  Clock,
  Phone,
  Mail,
  Users,
  Award,
  Linkedin,
  Youtube,
  Twitter,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import Contact from "@/components/shared/Contact";
import Link from "next/link";

export default function ContactPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Animation on scroll - triggers every time element enters/exits viewport
    const animateElements = document.querySelectorAll(".animate-on-scroll");

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in view - show animation
            entry.target.classList.add("animate-fade-up");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          } else {
            // Element is out of view - reset animation
            entry.target.classList.remove("animate-fade-up");
            entry.target.classList.add("opacity-0", "translate-y-8");
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: "0px 0px -100px 0px", // Trigger animation earlier
      }
    );

    animateElements.forEach((el) => {
      // Set initial state
      el.classList.add(
        "opacity-0",
        "translate-y-8",
        "transition-all",
        "duration-700",
        "ease-out"
      );
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white scroll-smooth">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4)), url('/hero.png')",
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              CONTACT
              <br />
              <span className="text-red-400">OUR EXPERTS</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to secure your organization? Our cybersecurity experts are
              here to help. Get in touch today to discuss your security needs
              and discover how we can protect your business from evolving
              threats.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="min-h-screen flex items-center justify-center bg-slate-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch Quickly
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the best way to reach our security experts based on your
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-on-scroll">
            {/* Phone Support */}
            <div className="bg-slate-800 p-6 rounded-lg text-center hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Phone className="h-12 w-12 text-red-500 mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-2">
                Phone Support
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Speak directly with our security consultants
              </p>
              <p className="text-red-400 font-semibold">+964 7764271151</p>
            </div>

            {/* Email Support */}
            <div className="bg-slate-800 p-6 rounded-lg text-center hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Mail className="h-12 w-12 text-red-500 mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-2">
                Email Support
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Send us detailed information about your needs
              </p>
              <p className="text-red-400 font-semibold">support@techtalent.it.com</p>
            </div>

            {/* Schedule Meeting */}
            <div className="bg-slate-800 p-6 rounded-lg text-center hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Clock className="h-12 w-12 text-red-500 mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-2">
                Schedule Meeting
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Book a consultation at your convenience
              </p>
              <p>
                <Button className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 transition-all duration-300 hover:scale-105">
                  <Link href="https://wa.me/9647764271151" target="_blank" rel="noopener noreferrer">
                    Book Now
                  </Link>
                </Button>
              </p>
            </div>

            {/* Instagram */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-lg text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Instagram className="h-12 w-12 text-white mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
              <p className="text-purple-100 text-sm mb-4">
                Behind-the-scenes cybersecurity content
              </p>
              <a
                href="https://www.instagram.com/tech3alent?igsh=Z2htMjBnYXQ0YWhv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-purple-600 hover:bg-gray-100 text-sm px-4 py-2 transition-all duration-300 hover:scale-105">
                  Follow Us
                </Button>
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-green-500 p-6 rounded-lg text-center hover:bg-green-600 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <MessageCircle className="h-12 w-12 text-white mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-green-100 text-sm mb-4">
                Quick messaging and support
              </p>
              <Link href="https://wa.me/9647764271151" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-green-600 hover:bg-gray-100 text-sm px-4 py-2 transition-all duration-300 hover:scale-105">
                  Message Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <div
        id="contact"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="w-full animate-on-scroll">
          <Contact />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="min-h-screen flex items-center justify-center bg-slate-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Security Team?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              When you contact us, you're connecting with industry-leading
              cybersecurity professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
            {/* Expert Team */}
            <div className="text-center group">
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                Expert Team
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                Our certified security professionals have decades of combined
                experience in government, military, and enterprise environments.
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="text-center group">
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                24/7 Availability
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                Security threats don't wait for business hours. Our emergency
                response team is available around the clock for critical
                incidents.
              </p>
            </div>

            {/* Proven Results */}
            <div className="text-center group">
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                Proven Results
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                 we're a trusted name in cybersecurity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="min-h-screen flex items-center justify-center bg-slate-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get quick answers to common questions about our services and
              processes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 animate-on-scroll">
            {/* FAQ Item 1 */}
            <div className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-xl font-bold text-white mb-3">
                How quickly can you respond to a security incident?
              </h3>
              <p className="text-gray-300">
                Our emergency response team is available 24/7 and can typically
                respond to critical security incidents within 2-4 hours. For
                non-emergency consultations, we usually schedule initial
                meetings within 24-48 hours.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-xl font-bold text-white mb-3">
                What information should I prepare before contacting you?
              </h3>
              <p className="text-gray-300">
                To help us better understand your needs, please prepare
                information about your organization size, industry, current
                security measures, specific concerns or incidents, and your
                compliance requirements. This helps us provide more targeted
                recommendations.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-xl font-bold text-white mb-3">
                Do you offer free initial consultations?
              </h3>
              <p className="text-gray-300">
                Yes, we offer complimentary 30-minute initial consultations to
                discuss your security needs and determine how our services can
                best help your organization. This allows us to understand your
                requirements and provide accurate project scoping.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-xl font-bold text-white mb-3">
                What industries do you serve?
              </h3>
              <p className="text-gray-300">
                We serve organizations across all industries, including
                healthcare, finance, government, education, retail,
                manufacturing, and technology. Our team has experience with
                industry-specific compliance requirements like HIPAA, PCI-DSS,
                SOX, and GDPR.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-fade-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}
