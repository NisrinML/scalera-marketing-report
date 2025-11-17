import Card1 from "@/assets/card1.webp";
import Card2 from "@/assets/card2.webp";
import Card3 from "@/assets/card3.webp";
import ServiceCard from "@/components/ServiceCard";
import useIsTablet from "@/hooks/useTablet";
import type { ServiceCardProps } from "@/types/service";

const ServicesSection = () => {
  const cardList: ServiceCardProps[] = [
    {
      title: "خطة تسويق مخصّصة جاهزة للتطبيق",
      desc: "يقدّم لك إستراتيجية مدروسة تعزز نمو عملك وتزيد من أرباحك.",
      icon: Card3,
      loc: "r",
    },
    {
      title: "تحديد نقاط الضعف في مسار التسويق",
      desc: "يعرّفك على الثغرات التي تمنع العملاء من اتخاذ قرار الشراء.",
      icon: Card2,
      loc: "c",
    },
    {
      title: "توضيح رسالتك التسويقية",
      desc: "يكشف ما إذا كانت رسالتك الحالية واضحة وجاذبة للعملاء أم تحتاج إلى تحسين.",
      icon: Card1,
      loc: "l",
    },
  ];
    const isTablet=useIsTablet(900)
  return (
    <section className="relative mx-auto px-8 lg:px-0 flex flex-col items-center justify-center gap-4">
      <h1 className="main-title text-linear">ماذا سيقدّمه لك التقرير؟</h1>
{isTablet?
 <div className="flex flex-row items-center justify-centerp-8  min-h-[300px]">

 </div>
:      <div className="flex flex-row items-center justify-center gap-32 overflow-visible p-8 md:p-16 min-h-[300px] md:min-h-[600px]">
        {cardList.map((card, index) => (
          <ServiceCard key={index} card={card} />
        ))}
      </div>
}
    </section>
  );
};

export default ServicesSection;
