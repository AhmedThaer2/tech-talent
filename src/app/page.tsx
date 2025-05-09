import { Shield, FileText, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCards from "@/components/shared/service-cards"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto py-24 md:py-32 px-4 md:px-6 flex flex-col items-center">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Be Proactive... Stop Threats Before They Begin
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            In a world where threats are accelerating, traditional protection methods reveal your weaknesses. Our smart
            defense begins with a digital approach.
          </p>
          <Button variant="destructive" size="lg" className="mt-8 rounded-none">
            Discover More <ChevronLeft className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service Card 1 */}
          <div className="bg-red-700 p-8 rounded-lg flex flex-col items-center text-center">
            <FileText className="h-16 w-16 mb-6 text-white" />
            <h3 className="text-2xl font-bold mb-4">Plans & Strategies</h3>
            <p className="text-white/80">
              We excel in creating customized plans and strategies derived from years of experience in the field of
              cybersecurity to ensure the highest levels of protection for your digital assets.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-gray-900 p-8 rounded-lg flex flex-col items-center text-center">
            <Shield className="h-16 w-16 mb-6 text-white" />
            <h3 className="text-2xl font-bold mb-4">Privacy Protection</h3>
            <p className="text-white/80">
              We protect your privacy with automatic design and by adopting strict security techniques and measures to
              ensure the highest levels of data protection.
            </p>
          </div>
        </div>
      </section>


      <ServiceCards />
    </div>
  )
}

