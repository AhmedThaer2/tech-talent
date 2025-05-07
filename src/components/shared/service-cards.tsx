import type React from "react"
import Link from "next/link"
import { Shield, Globe, Wifi, Users, Smartphone, Terminal } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

const ServiceCard = ({ title, description, icon, href }: ServiceCardProps) => {
  return (
    <div className="bg-[#1a1a1a] p-8 flex flex-col items-start rounded-lg">
      <div className="flex flex-col items-start">
        <div className="bg-red-600 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 self-end">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-white/80 text-right leading-relaxed mb-8">{description}</p>
      </div>
      <div className="w-full h-px bg-gray-800 mb-8"></div>
      <Link
        href={href}
        className="bg-white text-red-600 px-6 py-2 font-medium hover:bg-gray-100 transition-colors self-end"
      >
        مزيد من التفاصيل
      </Link>
    </div>
  )
}

export default function ServiceCards() {
  const services = [
    {
      title: "الفريق الأحمر (Red Team Operations)",
      description:
        "تنفيذ سيناريوهات هجومية متقدمة تحاكي هجمات حقيقية بهدف تقييم قدرة المؤسسات على اكتشاف الهجمات والتصدي لها بفعالية.",
      icon: <Terminal className="h-8 w-8 text-white" />,
      href: "/services/red-team",
    },
    {
      title: "اختبار اختراق تطبيقات الويب",
      description:
        "تحليل تطبيقات الويب بدقة للكشف عن الثغرات واستغلالها، مما يضمن حماية البيانات وسلامة المستخدمين من أي مخاطر أمنية.",
      icon: <Globe className="h-8 w-8 text-white" />,
      href: "/services/web-pentest",
    },
    {
      title: "اختبار اختراق الشبكات",
      description:
        "تحديد الثغرات الأمنية داخل البنية التحتية للشبكات من خلال محاكاة هجمات واقعية لضمان تأمين الشبكة وحمايتها من التهديدات المحتملة.",
      icon: <Shield className="h-8 w-8 text-white" />,
      href: "/services/network-pentest",
    },
    {
      title: "اختبارات اختراق الشبكات اللاسلكية",
      description: "الكشف عن نقاط الضعف داخل الشبكات اللاسلكية لضمان حماية الاتصال من أي محاولات اختراق أو تنصت.",
      icon: <Wifi className="h-8 w-8 text-white" />,
      href: "/services/wireless-pentest",
    },
    {
      title: "اختبارات الهندسة الاجتماعية",
      description:
        "محاكاة هجمات الهندسة الاجتماعية باستخدام البريد الإلكتروني، المكالمات الهاتفية، أو وسائل أخرى، لاختبار مستوى الوعي الأمني داخل المؤسسة.",
      icon: <Users className="h-8 w-8 text-white" />,
      href: "/services/social-engineering",
    },
    {
      title: "اختبار اختراق تطبيقات الأندرويد والـ iOS",
      description:
        "اختبار التطبيقات المحمولة للكشف عن الثغرات الأمنية وتأمينها مع التركيز على حماية بيانات المستخدمين والمعلومات الحساسة.",
      icon: <Smartphone className="h-8 w-8 text-white" />,
      href: "/services/mobile-pentest",
    },
  ]

  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">خدماتنا</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            href={service.href}
          />
        ))}
      </div>
    </div>
  )
}
