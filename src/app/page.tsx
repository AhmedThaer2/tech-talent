"use client"

import { Shield, Lock, Users, Target, Database, Globe, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import Contact from "@/components/shared/Contact"

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Animation on scroll
    const animateElements = document.querySelectorAll(".animate-on-scroll")

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
            entry.target.classList.remove("opacity-0", "translate-y-8")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    animateElements.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-700", "ease-out")
      observerRef.current?.observe(el)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-white scroll-smooth">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4)), url('/hero.png')",
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              IS YOUR COMPANY
              <br />
              <span className="text-red-400">SECURE?</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              We have helped hundreds of companies—from local small businesses to large Fortune 500 enterprises—secure
              their most valuable data. Our solutions are fully customized to meet your specific needs and requirements.
              When you're ready to secure your organization, choose us as your trusted partner.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
                  OUR SERVICES
                </Button>
              </Link>
              <a href="#contact">
                <Button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
                  CONTACT US
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              CYBERSECURITY SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Secure Your Network Through Advanced
              <br />
              <span className="text-red-600bg-red-600">Security Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive cybersecurity services designed to protect your organization from evolving threats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Penetration Testing Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-red-600 p-8 text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-on-scroll">
              <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <Target className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Penetration Testing</h3>
                </div>
                <p className="text-red-100 mb-6 leading-relaxed">
                  Comprehensive security assessments including vulnerability scanning, network penetration testing, and
                  social engineering evaluations.
                </p>
                <div className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>External & Internal Testing</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>Web Application Security</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>Social Engineering</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>Vulnerability Assessments</span>
                  </div>
                </div>
                <Link href="/services">
                  <Button className="bg-white text-red-600 hover:bg-gray-100 transition-all duration-300 group-hover:translate-x-1">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            </div>

            {/* Auditing & Compliance Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-on-scroll">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <Lock className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Auditing & Compliance</h3>
                </div>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Ensure regulatory compliance with comprehensive auditing services for PCI-DSS, HIPAA, GDPR, and other
                  standards.
                </p>
                <div className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>PCI-DSS Compliance</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>HIPAA & GDPR</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>Risk Assessments</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>Policy Development</span>
                  </div>
                </div>
                <Link href="/services">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 group-hover:translate-x-1">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            </div>

            {/* Training Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 p-8 text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-on-scroll">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <Users className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Security Training</h3>
                </div>
                <p className="text-teal-100 mb-6 leading-relaxed">
                  Comprehensive security awareness training programs to build a strong security culture within your
                  organization.
                </p>
                <div className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>Security Awareness</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>Phishing Simulations</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>Custom Curriculum</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>On-site Training</span>
                  </div>
                </div>
                <Link href="/services">
                  <Button className="bg-white text-teal-600 hover:bg-gray-100 transition-all duration-300 group-hover:translate-x-1">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="min-h-screen flex items-center justify-center bg-slate-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Top Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="space-y-6 animate-on-scroll">
              <div className="inline-block bg-red-600/10 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                WHY CHOOSE US
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">What Sets Us Apart?</h2>
              <p className="text-gray-300 text-lg">
                With decades of combined experience, thousands of hours of practice, and a foundation built on core
                values from our time in service, we apply our expertise to secure your environment.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="bg-red-600 rounded-full p-1 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    From start to finish, we take pride in delivering high-quality work and ensuring customer
                    satisfaction on every engagement.
                  </p>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="bg-red-600 rounded-full p-1 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    We hire only the best and brightest ethical hackers—so we find the vulnerabilities before the
                    malicious actors do.
                  </p>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="bg-red-600 rounded-full p-1 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    With over 300,000 followers across social media platforms, we're a trusted name in the security
                    industry.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Security Illustration */}
            <div className="relative animate-on-scroll">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-80 h-80 mx-auto relative overflow-hidden animate-pulse">
                {/* Laptop */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gray-800 rounded-lg p-4 w-48 h-32 relative transform hover:scale-105 transition-transform duration-300">
                    <div className="bg-blue-400 w-full h-20 rounded flex items-center justify-center">
                      <Lock className="h-12 w-12 text-red-500 animate-bounce" />
                    </div>
                    <div className="bg-gray-700 w-full h-2 mt-2 rounded"></div>
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute top-8 right-8 animate-float">
                  <div className="bg-orange-500 rounded-lg p-2 hover:scale-110 transition-transform duration-300">
                    <Globe className="h-4 w-4 text-white" />
                  </div>
                </div>

                <div className="absolute top-16 left-8 animate-float-delayed">
                  <div className="bg-blue-600 rounded-full p-2 hover:scale-110 transition-transform duration-300">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-16 right-12 animate-float">
                  <div className="bg-yellow-500 rounded-lg p-2 hover:scale-110 transition-transform duration-300">
                    <Database className="h-4 w-4 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-8 left-12 animate-float-delayed">
                  <div className="bg-green-500 rounded-full p-2 hover:scale-110 transition-transform duration-300">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">WORLD-CLASS SECURITY EXPERTS</h3>
              <p className="text-gray-600 text-sm">We help to prevent breaches and keep your company safe.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">REPUTED CLIENTS</h3>
              <p className="text-gray-600 text-sm">
                Fortune 500 companies, government agencies, educational, and non-profits.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">DECADES OF EXPERIENCE</h3>
              <p className="text-gray-600 text-sm">
                Combined experience of thousands of hours of practice, and core values from our time in service.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">CLIENT-TAILORED & CUSTOM SOLUTIONS</h3>
              <p className="text-gray-600 text-sm">
                Testing packages: GDPR, SOX, HIPAA, NIST, PCI-DSS, and the CIS Top 20.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact" className="min-h-screen flex items-center justify-center">
        <div className="w-full animate-on-scroll">
          <Contact />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1.5s;
        }
        
        .animate-fade-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  )
}
