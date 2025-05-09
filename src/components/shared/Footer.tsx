import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">Tech Talent</span>
              <span className="ml-2 bg-red-600 h-2 w-2 rounded-full"></span>
            </div>
            <p className="text-gray-400 text-sm">
              Proactive cybersecurity solutions protecting your digital assets from emerging threats.
            </p>
            <div className="pt-2">
              <Button variant="destructive" size="sm" className="rounded-none">
                Get Protected
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Our Services", "Training", "Academy"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Threat Assessment",
                "Privacy Protection",
                "Security Consulting",
                "Penetration Testing",
                "Incident Response",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>123 Security Street</li>
              <li>Cyber City, CC 10101</li>
              <li className="pt-2">contact@smt-security.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>

            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-gray-500 hover:text-red-500 transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-red-500 transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-red-500 transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-red-500 transition-colors">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">© {currentYear} Tech Talent Security. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-red-500 text-xs">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-red-500 text-xs">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-red-500 text-xs">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
