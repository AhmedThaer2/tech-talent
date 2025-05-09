"use client"

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Nav = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Training", href: "/training" },
    { name: "Academy", href: "/academy" },
    { name: "Contact Us", href: "/contact" },
  ]
  return (
    <header className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6 relative">
      <Button variant="destructive" size="sm" className="rounded-none">
        Request Services
      </Button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className="hover:text-red-500 transition-colors">
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Logo - visible only on desktop */}
      <div className="hidden md:flex items-center">
        <Link href="/" className="flex items-center text-red-500">
          Tech Talent
        </Link>
      </div>

      {/* Mobile Burger Menu - positioned on the right */}
      <button className="md:hidden text-white z-50" onClick={toggleSidebar} aria-label="Toggle menu">
        {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-0 bg-black/90 z-40 md:hidden transition-transform duration-300 ease-in-out",
          isSidebarOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
          {/* SMT Logo inside the sidebar */}
          <Link href="/" className="text-3xl font-bold mb-8 text-red-500" onClick={() => setIsSidebarOpen(false)}>
            Tech Talent
          </Link>

          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xl font-medium hover:text-red-500 transition-colors"
              onClick={() => setIsSidebarOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button variant="destructive" size="lg" className="mt-4 rounded-none" onClick={() => setIsSidebarOpen(false)}>
            Request Services
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Nav
