"use client"

import {
  Shield,
  Users,
  Target,
  Globe,
  Cloud,
  Bug,
  Network,
  Key,
  FileText,
  AlertTriangle,
  Wifi,
  Search,
  Cog,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import Contact from "@/components/shared/Contact"

export default function Services() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Animation on scroll - triggers every time element enters/exits viewport
    const animateElements = document.querySelectorAll(".animate-on-scroll")

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in view - show animation
            entry.target.classList.add("animate-fade-up")
            entry.target.classList.remove("opacity-0", "translate-y-8")
          } else {
            // Element is out of view - reset animation
            entry.target.classList.remove("animate-fade-up")
            entry.target.classList.add("opacity-0", "translate-y-8")
          }
        })
      },
      {
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: "0px 0px -100px 0px", // Trigger animation earlier
      },
    )

    animateElements.forEach((el) => {
      // Set initial state
      el.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-700", "ease-out")
      observerRef.current?.observe(el)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  const penetrationServices = [
    {
      id: "external-penetration-testing",
      icon: Target,
      title: "External Penetration Testing",
      description: "External penetration testing is the evaluation of your network's perimeter defenses.",
      color: "from-red-500 to-red-600",
      iconColor: "text-red-500",
    },
    {
      id: "internal-penetration-testing",
      icon: Network,
      title: "Internal Penetration Testing",
      description: "Internal penetration testing emulates attacks from inside your corporate network.",
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-500",
    },
    {
      id: "web-application-testing",
      icon: Globe,
      title: "Web Application Testing",
      description:
        "Web application testing measures the security posture of your website and/or custom developed application.",
      color: "from-teal-500 to-teal-600",
      iconColor: "text-teal-500",
    },
    {
      id: "vulnerability-scanning",
      icon: AlertTriangle,
      title: "Vulnerability Scanning",
      description: "Vulnerability assessments evaluate and prioritize exposures in your organization.",
      color: "from-orange-500 to-orange-600",
      iconColor: "text-orange-500",
    },
    {
      id: "wireless-penetration-testing",
      icon: Wifi,
      title: "Wireless Penetration Testing",
      description: "Wireless testing is the evaluation of your wireless posture.",
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-500",
    },
    {
      id: "social-engineering",
      icon: Users,
      title: "Social Engineering",
      description: "Social engineering assesses the human vulnerability factor in your organization.",
      color: "from-green-500 to-green-600",
      iconColor: "text-green-500",
    },
  ]

  const auditingServices = [
    {
      id: "security-risk-assessment",
      icon: Shield,
      title: "Security Risk Assessment",
      description:
        "A risk assessment evaluates the potential threats to your organization and the risks to the confidentiality, integrity, and availability of information.",
      color: "from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-500",
    },
    {
      id: "cloud-security-assessment",
      icon: Cloud,
      title: "Cloud Security Assessment",
      description:
        "A cloud security assessment evaluates your organization's cloud infrastructure and helps secure your critical cloud assets.",
      color: "from-sky-500 to-sky-600",
      iconColor: "text-sky-500",
    },
    {
      id: "console-architecture-assessment",
      icon: Network,
      title: "Console Architecture Assessment",
      description:
        "A console architecture assessment considers the perimeter and internal network architectures and configurations.",
      color: "from-cyan-500 to-cyan-600",
      iconColor: "text-cyan-500",
    },
    {
      id: "security-gap-analysis",
      icon: Search,
      title: "Security Gap Analysis",
      description: "A security gap analysis is a review of your organization's security posture.",
      color: "from-emerald-500 to-emerald-600",
      iconColor: "text-emerald-500",
    },
    {
      id: "host-compliance-malware-audit",
      icon: Bug,
      title: "Host Compliance & Malware Audit",
      description: "A host compliance audit evaluates your devices for security best-practices.",
      color: "from-yellow-500 to-yellow-600",
      iconColor: "text-yellow-500",
    },
    {
      id: "password-audit",
      icon: Key,
      title: "Password Audit",
      description: "A password audit is the evaluation of your organization's password policy.",
      color: "from-pink-500 to-pink-600",
      iconColor: "text-pink-500",
    },
    {
      id: "security-policy-assessment",
      icon: FileText,
      title: "Security Policy Assessment",
      description: "A security policy assessment is the evaluation of your organization's current security policies.",
      color: "from-violet-500 to-violet-600",
      iconColor: "text-violet-500",
    },
    {
      id: "tailored-consulting",
      icon: Cog,
      title: "Tailored Consulting",
      description: "Custom cybersecurity consulting services designed to meet your specific organizational needs.",
      color: "from-slate-500 to-slate-600",
      iconColor: "text-slate-500",
    },
  ]

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
            <div className="inline-block bg-red-600/10 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              CYBERSECURITY SERVICES
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              OUR
              <br />
              <span className="text-red-400">SERVICES</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity services designed to protect your organization from evolving threats. From
              penetration testing to compliance assessments, we deliver tailored solutions that meet your unique
              security needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
                  GET CONSULTATION
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Penetration Testing Section */}
      <section id="penetration-testing" className="min-h-screen flex items-center justify-center bg-slate-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              PENETRATION TESTING
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Advanced Penetration Testing Services</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From large Fortune 500 companies to local small businesses, we have helped hundreds of companies secure
              their most valuable data. Our solutions are customized to meet your needs and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto animate-on-scroll">
            {penetrationServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl bg-gradient-to-br from-red-500 to-red-600"></div>

                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <service.icon
                        className={`h-16 w-16 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full blur-xl bg-gradient-to-br from-red-500 to-red-600"></div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  <Link href={`/services/${service.id}`}>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-sm font-semibold transition-all duration-300 group-hover:scale-105">
                      READ MORE{" "}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Auditing & Consultation Section */}
      <section className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              AUDITING & CONSULTATION
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Security Auditing & Consultation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our talented engineers have decades of experience assisting customers with their comprehensive security
              needs and compliance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto animate-on-scroll">
            {auditingServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                style={{
                  animationDelay: `${index * 100}ms`,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <service.icon
                        className={`h-12 w-12 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full blur-xl bg-gradient-to-br from-blue-500 to-blue-600"></div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-grow">
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    <Link href={`/services/${service.id}`}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-semibold transition-all duration-300 group-hover:scale-105">
                        READ MORE{" "}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />

      <style jsx>{`
        .animate-fade-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  )
}
