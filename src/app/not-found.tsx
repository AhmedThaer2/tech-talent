"use client"

import { Shield, Home, ArrowLeft, Search, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function NotFound() {
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

  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* 404 Content */}
      <section className="min-h-screen flex items-center justify-center bg-slate-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Animated 404 */}
            <div className="animate-on-scroll">
              <div className="relative">
                {/* Large 404 Text */}
                <h1 className="text-8xl md:text-9xl font-bold text-red-600/20 select-none">404</h1>

                {/* Security Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 rounded-full p-8 animate-pulse">
                    <AlertTriangle className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-6 animate-on-scroll">
              <div className="inline-block bg-red-600/10 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                SECURITY BREACH DETECTED
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white">PAGE NOT FOUND</h2>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                The page you're looking for has been moved, deleted, or doesn't exist. Our security systems have
                detected this unauthorized access attempt. Don't worry - your data is safe with us.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
              <Link href="/">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
                  <Home className="mr-2 h-5 w-5" />
                  GO HOME
                </Button>
              </Link>

              <Button
                onClick={() => window.history.back()}
                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                GO BACK
              </Button>
            </div>

            {/* Search Suggestion */}
            <div className="bg-slate-800 p-6 rounded-lg max-w-2xl mx-auto animate-on-scroll">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Search className="h-6 w-6 text-red-400" />
                <h3 className="text-xl font-bold text-white">Looking for something specific?</h3>
              </div>

              <p className="text-gray-300 mb-6">
                Try navigating to one of our main sections or contact our security experts for assistance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/services">
                  <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white transition-all duration-300 hover:scale-105">
                    Our Services
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white transition-all duration-300 hover:scale-105">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>


            {/* Emergency Contact */}
            <div className="bg-red-600 p-6 rounded-lg max-w-md mx-auto animate-on-scroll">
              <h4 className="text-xl font-bold text-white mb-2">Security Emergency?</h4>
              <p className="text-red-100 mb-4">Need immediate cybersecurity assistance?</p>
              <Link href="tel:+1-000-911-HELP">
                <Button className="bg-white text-red-600 hover:bg-gray-100 font-bold transition-all duration-300 hover:scale-105">
                  Call Emergency Line: +1 (000) 911-HELP
                </Button>
              </Link>
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
  )
}
