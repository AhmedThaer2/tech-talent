import React from 'react'
import { Shield, FileText, ChevronLeft, Lock, Search, AlertTriangle, Code, Server, Database } from "lucide-react"
import Link from 'next/link'
import Nav from '@/components/shared/Nav'

const page = () => {
  return (
  <div className='bg-black text-white'>
    {/* Navigation Bar */}
    <Nav />
    {/* Hero Section */}
      <section className="container mx-auto py-16 md:py-24 px-4 md:px-6 flex flex-col items-center">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">خدماتنا المتخصصة في الأمن السيبراني</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من خدمات الأمن السيبراني المصممة خصيصًا لحماية مؤسستك من التهديدات المتطورة
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-red-700 p-8 flex flex-col items-center text-center group hover:bg-red-800 transition-colors">
            <FileText className="h-16 w-16 mb-6 text-white" />
            <h3 className="text-2xl font-bold mb-4">الخطط والإستراتيجيات</h3>
            <p className="text-white/80">
              نتميز بابتكار خطط واستراتيجيات منظومة تعزز من قدرات المؤسسات والشركات في مجال الأمن السيبراني لضمان أعلى
              مستويات الحماية.
            </p>
            <Link href="#" className="mt-6 inline-flex items-center text-white font-medium">
              اكتشف المزيد <ChevronLeft className="h-4 w-4 mr-1" />
            </Link>
          </div>

          {/* Service Card 2 */}
          <div className="bg-gray-900 p-8 flex flex-col items-center text-center group hover:bg-gray-800 transition-colors">
            <Shield className="h-16 w-16 mb-6 text-white" />
            <h3 className="text-2xl font-bold mb-4">حماية الخصوصية</h3>
            <p className="text-white/80">
              نضع خصوصيتك في تصميم أولوياتنا مع اعتماد تقنيات وسياسات صارمة لضمان أعلى مستويات الحماية للبيانات.
            </p>
            <Link href="#" className="mt-6 inline-flex items-center text-white font-medium">
              اكتشف المزيد <ChevronLeft className="h-4 w-4 mr-1" />
            </Link>
          </div>

          {/* Service Card 3 */}
          <div className="bg-gray-900 p-8 flex flex-col items-center text-center group hover:bg-gray-800 transition-colors">
            <Lock className="h-16 w-16 mb-6 text-white" />
            <h3 className="text-2xl font-bold mb-4">تأمين البنية التحتية</h3>
            <p className="text-white/80">
              نقدم خدمات متكاملة لتأمين البنية التحتية التقنية للمؤسسات والشركات ضد الاختراقات والهجمات الإلكترونية.
            </p>
            <Link href="#" className="mt-6 inline-flex items-center text-white font-medium">
              اكتشف المزيد <ChevronLeft className="h-4 w-4 mr-1" />
            </Link>
          </div>

          {/* Service Card 4 */}
          <div className="bg-gray-900 p-8 flex flex-col items-center text-center group hover:bg-gray-800 transition-colors">
            <Search className="h-16 w-16 mb-6 text-white" />
            <h3 className="text-2xl font-bold mb-4">اختبار الاختراق</h3>
            <p className="text-white/80">
              نقوم بإجراء اختبارات اختراق شاملة لتحديد نقاط الضعف في أنظمتك قبل أن يتمكن المهاجمون الحقيقيون من
              استغلالها.
            </p>
            <Link href="#" className="mt-6 inline-flex items-center text-white font-medium">
              اكتشف المزيد <ChevronLeft className="h-4 w-4 mr-1" />
            </Link>
          </div>

          {/* Service Card 5 */}
          <div className="bg-gray-900 p-8 flex flex-col items-center text-center group hover:bg-gray-800 transition-colors">
            <AlertTriangle className="h-16 w-16 mb-6 text-white" />
            <h3 className="text-2xl font-bold mb-4">الاستجابة للحوادث</h3>
            <p className="text-white/80">
              فريق متخصص للاستجابة السريعة للحوادث الأمنية والتعامل معها بكفاءة عالية للحد من الأضرار واستعادة العمليات.
            </p>
            <Link href="#" className="mt-6 inline-flex items-center text-white font-medium">
              اكتشف المزيد <ChevronLeft className="h-4 w-4 mr-1" />
            </Link>
          </div>

          {/* Service Card 6 */}
          <div className="bg-red-700 p-8 flex flex-col items-center text-center group hover:bg-red-800 transition-colors">
            <Code className="h-16 w-16 mb-6 text-white" />
            <h3 className="text-2xl font-bold mb-4">تطوير برمجيات آمنة</h3>
            <p className="text-white/80">
              نساعد في تطوير وتقييم البرمجيات مع التركيز على الأمان منذ مراحل التصميم الأولى لضمان منتج نهائي خالٍ من
              الثغرات.
            </p>
            <Link href="#" className="mt-6 inline-flex items-center text-white font-medium">
              اكتشف المزيد <ChevronLeft className="h-4 w-4 mr-1" />
            </Link>
          </div>

          {/* Service Card 7 */}
          <div className="bg-gray-900 p-8 flex flex-col items-center text-center group hover:bg-gray-800 transition-colors">
            <Server className="h-16 w-16 mb-6 text-white" />
            <h3 className="text-2xl font-bold mb-4">مراقبة الأمن المستمرة</h3>
            <p className="text-white/80">
              خدمات مراقبة أمنية على مدار الساعة لاكتشاف التهديدات والاستجابة لها في الوقت الفعلي قبل أن تتسبب في أضرار.
            </p>
            <Link href="#" className="mt-6 inline-flex items-center text-white font-medium">
              اكتشف المزيد <ChevronLeft className="h-4 w-4 mr-1" />
            </Link>
          </div>

          {/* Service Card 8 */}
          <div className="bg-gray-900 p-8 flex flex-col items-center text-center group hover:bg-gray-800 transition-colors">
            <Database className="h-16 w-16 mb-6 text-white" />
            <h3 className="text-2xl font-bold mb-4">حماية البيانات</h3>
            <p className="text-white/80">
              استراتيجيات وحلول متكاملة لحماية البيانات الحساسة من التسرب أو الفقدان مع الالتزام بمتطلبات الامتثال
              التنظيمية.
            </p>
            <Link href="#" className="mt-6 inline-flex items-center text-white font-medium">
              اكتشف المزيد <ChevronLeft className="h-4 w-4 mr-1" />
            </Link>
          </div>

          {/* Service Card 9 */}
          <div className="bg-red-700 p-8 flex flex-col items-center text-center group hover:bg-red-800 transition-colors">
            <Shield className="h-16 w-16 mb-6 text-white" />
            <h3 className="text-2xl font-bold mb-4">التدريب والتوعية</h3>
            <p className="text-white/80">
              برامج تدريبية متخصصة لرفع مستوى الوعي الأمني لدى الموظفين وتطوير مهاراتهم للتعامل مع التهديدات السيبرانية.
            </p>
            <Link href="#" className="mt-6 inline-flex items-center text-white font-medium">
              اكتشف المزيد <ChevronLeft className="h-4 w-4 mr-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto py-16 px-4 md:px-6">
        <div className="bg-gray-900 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">هل تحتاج إلى خدمة مخصصة؟</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            نحن نقدم حلولًا مخصصة تناسب احتياجات عملك الفريدة. تواصل معنا اليوم لمناقشة كيف يمكننا مساعدتك.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg font-medium transition-colors">
            تواصل معنا الآن
          </button>
        </div>
        </section>
  </div>
  )
}

export default page