import { notFound } from "next/navigation"

import { Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAllServices, getServiceById } from "@/lib/services-data"
import Contact from "@/components/shared/Contact"
import Link from "next/link"

interface ServicePageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const services = getAllServices()
  return services.map((service) => ({
    id: service.id,
  }))
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = await getServiceById(params.id)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section
        className="relative h-screen py-20 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4)), url('/hero.png')",
        }}
      >
        <div className="container mx-auto px-4 md:px-6 w-full h-full flex justify-center items-center">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{service.title}</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">{service.fullDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-500 hover:bg-gray-700 text-white px-8 py-3 text-lg">
                <Link href={'/contact'}>
                  CONTACT US
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Duration */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Clock className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Duration</h3>
              <p className="text-gray-600">{service.duration}</p>
            </div>

            {/* Category */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Shield className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Category</h3>
              <p className="text-gray-600 capitalize">{service.category.replace("-", " ")}</p>
            </div>
          </div>
        </div>
      </section>


      {/* Contact */}
      <Contact />
    </div>
  )
}
