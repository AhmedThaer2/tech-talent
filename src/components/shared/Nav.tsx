import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Nav = () => {

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Training", href: "/training" },
    { name: "Academy", href: "/academy" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <header className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
      <Button variant="destructive" size="sm" className="rounded-none">
        Request Services
      </Button>

      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className="hover:text-red-500">
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          SMT
        </Link>
      </div>
    </header>
  );
};

export default Nav;
