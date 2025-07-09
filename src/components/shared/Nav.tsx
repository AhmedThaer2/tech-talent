"use client"

import Link from "next/link"
import { useState, useRef } from "react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { Menu, X, ChevronDown } from "lucide-react"


const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false)
  const [isPenTestOpen, setIsPenTestOpen] = useState<boolean>(false)
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const penTestTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current)
    }
    setIsServicesOpen(true)
  }

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false)
      setIsPenTestOpen(false)
    }, 150)
  }

  const handlePenTestMouseEnter = () => {
    if (penTestTimeoutRef.current) {
      clearTimeout(penTestTimeoutRef.current)
    }
    setIsPenTestOpen(true)
  }

  const handlePenTestMouseLeave = () => {
    penTestTimeoutRef.current = setTimeout(() => {
      setIsPenTestOpen(false)
    }, 150)
  }

  const navItems = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const penetrationTestingServices = [
    { name: "External Penetration Testing", href: "/services/external-penetration-testing" },
    { name: "Internal Penetration Testing", href: "/services/internal-penetration-testing" },
    { name: "Social Engineering", href: "/services/social-engineering" },
    { name: "Vulnerability Scanning", href: "/services/vulnerability-scanning" },
    { name: "Web Application Penetration Testing", href: "/services/web-application-testing" },
    { name: "Wireless Penetration Testing", href: "/services/wireless-penetration-testing" },
  ]

  const otherServices = [
    { name: "Cloud Security Assessment", href: "/services/cloud-security-assessment" },
    { name: "Malware Assessment", href: "/services/malware-assessment" },
    { name: "Network Config Assessment", href: "/services/network-config-assessment" },
    { name: "Password Audit", href: "/services/password-audit" },
    { name: "Security Policy Assessment", href: "/services/security-policy-assessment" },
    { name: "Security Risk Assessment", href: "/services/security-risk-assessment" },
    { name: "PCI DSS QSA", href: "/services/pci-dss-qsa" },
    { name: "Tailored Consulting", href: "/services/tailored-consulting" },
  ]

  return (
    <>
      <nav className="bg-slate-800 border-b border-slate-700 relative z-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img src="/logo2.png" alt="TechTalent Security" className="h-24 w-auto" />
              <span className="text-xl font-bold text-white">Tech-Talent Security</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-red-500 hover:text-red-300 transition-colors">
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button className="flex items-center space-x-1 text-white hover:text-red-400 transition-colors py-4">
                  <Link href={'/services'}>Services</Link>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-0 w-80 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50">
                    <div className="p-4">
                      {/* Penetration Testing Submenu */}
                      <div className="mb-4">
                        <div
                          className="flex items-center justify-between text-red-400 font-semibold mb-2 cursor-pointer hover:text-red-300 py-1"
                          onMouseEnter={handlePenTestMouseEnter}
                          onMouseLeave={handlePenTestMouseLeave}
                          onClick={() => setIsPenTestOpen(!isPenTestOpen)}
                        >
                          <span>Penetration Testing</span>
                          <ChevronDown className={cn("h-4 w-4 transition-transform", isPenTestOpen && "rotate-180")} />
                        </div>
                        {isPenTestOpen && (
                          <div
                            className="ml-4 space-y-1"
                            onMouseEnter={handlePenTestMouseEnter}
                            onMouseLeave={handlePenTestMouseLeave}
                          >
                            {penetrationTestingServices.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block text-sm text-gray-300 hover:text-white hover:bg-slate-700 px-2 py-1 rounded transition-colors"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Other Services */}
                      <div className="border-t border-slate-700 pt-4">
                        <div className="space-y-1">
                          {otherServices.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block text-sm text-gray-300 hover:text-white hover:bg-slate-700 px-2 py-1 rounded transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {navItems.map((item) => (
                <Link href={item.href} key={item.name} className="text-white hover:text-red-400 transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 rounded-md text-white hover:text-red-400 hover:bg-slate-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && <div className="fixed inset-0 bg-transparent bg-opacity-50 z-40 md:hidden" onClick={toggleSidebar} />}

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-80 bg-slate-800 border-l border-slate-700 transform transition-transform duration-300 ease-in-out z-50 md:hidden overflow-y-auto",
          isSidebarOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <div className="flex items-center space-x-2">
              <img src="/logo2.png" className="w-16 h-16" alt="MainImage" />
              <span className="text-lg font-bold text-white">Tech-Talent</span>
            </div>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-white hover:text-red-400 hover:bg-slate-700 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col py-4">
            <Link
              href="/"
              onClick={toggleSidebar}
              className="px-6 py-3 text-red-400 hover:text-red-300 hover:bg-slate-700 transition-colors border-b border-slate-700"
            >
              Home
            </Link>

            {/* Mobile Services Section */}
            <div className="border-b border-slate-700">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between px-6 py-3 text-white hover:text-red-400 hover:bg-slate-700 transition-colors"
              >
                <Link href={'/services'}>Services</Link>
                <ChevronDown className={cn("h-4 w-4 transition-transform", isServicesOpen && "rotate-180")} />
              </button>

              {isServicesOpen && (
                <div className="bg-slate-700">
                  {/* Penetration Testing Mobile Submenu */}
                  <div>
                    <button
                      onClick={() => setIsPenTestOpen(!isPenTestOpen)}
                      className="w-full flex items-center justify-between px-8 py-2 text-red-400 hover:text-red-300 hover:bg-slate-600 transition-colors text-sm"
                    >
                      <span>Penetration Testing</span>
                      <ChevronDown className={cn("h-3 w-3 transition-transform", isPenTestOpen && "rotate-180")} />
                    </button>

                    {isPenTestOpen && (
                      <div className="bg-slate-600">
                        {penetrationTestingServices.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={toggleSidebar}
                            className="block px-12 py-2 text-xs text-gray-300 hover:text-white hover:bg-slate-500 transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Other Services Mobile */}
                  {otherServices.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={toggleSidebar}
                      className="block px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                onClick={toggleSidebar}
                className="px-6 py-3 text-white hover:text-red-400 hover:bg-slate-700 transition-colors border-b border-slate-700"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile CTA Section */}
          <div className="mt-auto p-4 border-t border-slate-700">
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white" onClick={toggleSidebar}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
