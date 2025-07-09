"use client";

import {
  Shield,
  Lock,
  Users,
  Target,
  Globe,
  Award,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import Contact from "@/components/shared/Contact";

export default function About() {
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
              ABOUT
              <br />
              <span className="text-red-400">Tech-Talent Security</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              At Tech Talent, we are a cybersecurity and software development
              team driven by innovation, precision, and the passion to create
              meaningful digital solutions. We don’t just build code—we build
              futures.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="min-h-screen flex items-center justify-center bg-gray-100 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-on-scroll">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                OUR MISSION
              </h3>
              <p className="text-gray-600">
                To provide world-class cybersecurity services that protect our
                clients' most valuable digital assets. We strive to stay ahead
                of emerging threats and deliver proactive security solutions
                that give our clients peace of mind.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                OUR VISION
              </h3>
              <p className="text-gray-600">
                To be the leading cybersecurity partner for organizations
                worldwide, creating a safer digital environment through
                innovative security practices, continuous education, and
                unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="min-h-screen flex items-center justify-center bg-slate-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Story
              </h2>

              <p className="text-gray-300 text-lg">
                Our journey began with a shared passion for technology and
                experimentation. From early freelance projects to international
                contracts, we’ve grown into a trusted team delivering real
                impact.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="bg-red-600 rounded-full p-1 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    Delivered 7 major projects in the region.
                  </p>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="bg-red-600 rounded-full p-1 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    Signed 2 official contracts with institutional partners.
                  </p>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="bg-red-600 rounded-full p-1 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    Partnered with the Sultanate of Oman to develop an AI-based.
                  </p>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="bg-red-600 rounded-full p-1 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    Trained professionals and students across the Arab world.
                  </p>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="bg-red-600 rounded-full p-1 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    Delivered customized training to a private organization in
                    Dubai.
                  </p>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="bg-red-600 rounded-full p-1 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    Participated in numerous regional and international tech
                    workshops.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6 animate-on-scroll">
              <div className="bg-slate-800 p-6 rounded-lg text-center hover:bg-slate-700 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-red-400 mb-2 hover:scale-110 transition-transform duration-300">
                  ++
                </div>
                <div className="text-gray-300">Security Assessments</div>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg text-center hover:bg-slate-700 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-red-400 mb-2 hover:scale-110 transition-transform duration-300">
                  ++
                </div>
                <div className="text-gray-300">Professionals Trained</div>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg text-center hover:bg-slate-700 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-red-400 mb-2 hover:scale-110 transition-transform duration-300">
                  ++
                </div>
                <div className="text-gray-300">Social Followers</div>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg text-center hover:bg-slate-700 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-red-400 mb-2 hover:scale-110 transition-transform duration-300">
                  ++
                </div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="min-h-screen flex items-center justify-center bg-gray-100 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team consists of certified security professionals with
              extensive experience in government, military, and enterprise
              environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Users className="h-12 w-12 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {" "}
                Software engineers
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Our software engineers are the backbone of our technical
                solutions. They design and build secure, scalable applications
                and systems tailored to meet the unique needs of enterprise,
                government, and defense environments. With a focus on
                performance and reliability, they turn complex problems into
                elegant, functional software.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Shield className="h-12 w-12 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Cybersecurity analysts
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Our cybersecurity analysts specialize in identifying
                vulnerabilities, mitigating threats, and safeguarding critical
                assets. Drawing from experience in military and enterprise-grade
                systems, they conduct continuous monitoring and threat analysis
                to ensure your data remains secure in an ever-evolving digital
                landscape.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Lock className="h-12 w-12 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                AI specialists
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Our AI specialists harness the power of machine learning and
                artificial intelligence to build smart, adaptive security
                solutions. Whether it's automating threat detection or enhancing
                system intelligence, they push the boundaries of what's
                possible—merging innovation with security expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="min-h-screen flex items-center justify-center bg-slate-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a
              cybersecurity organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
            {/* Value 1 */}
            <div className="text-center group">
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                INTEGRITY
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                We operate with the highest ethical standards and maintain
                complete transparency in all our engagements.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center group">
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                EXCELLENCE
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                We strive for perfection in every assessment, report, and
                recommendation we deliver to our clients.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center group">
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                COLLABORATION
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                We work closely with our clients as partners, not just vendors,
                to achieve their security objectives.
              </p>
            </div>

            {/* Value 4 */}
            <div className="text-center group">
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                INNOVATION
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                We continuously evolve our methodologies and tools to stay ahead
                of emerging cybersecurity threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Contact />

      <style jsx>{`
        .animate-fade-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}
