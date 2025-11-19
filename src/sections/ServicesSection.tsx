import Card1 from "@/assets/card1.webp";
import Card2 from "@/assets/card2.webp";
import Card3 from "@/assets/card3.webp";
import ServiceCard from "@/components/ServiceCard";
import useIsTablet from "@/hooks/useTablet";
import type { ServiceCardProps } from "@/types/service";
import { useEffect, useState } from "react";
import { circOut, motion } from "framer-motion";
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
    const isTablet = useIsTablet(920)
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        if (!isTablet) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % cardList.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isTablet]);

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, x: 40 },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: circOut },
        },
    };

    return (
        <section className="relative mx-auto px-8 xl:px-0 flex flex-col items-center justify-center gap-4">
            <h1 className="title text-linear">ماذا سيقدّمه لك التقرير؟</h1>
            {isTablet ?
                <div className="relative w-full flex flex-row items-center justify-center  min-h-[300px] overflow-hidden">

                    <div
                        key={activeIndex}
                        className="w-full flex justify-center transition-all duration-700 pb-12 opacity-0 animate-fade-in"
                    >
                        <ServiceCard card={cardList[activeIndex]} />
                    </div>

                </div>
                : <motion.div className="flex flex-row items-center justify-center gap-4 md:min-h-[600px] overflow-hidden"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {cardList.map((card, index) => (
                        <motion.div key={index} variants={cardVariants} className="p-16 md:p-6 lg:p-16">
                            <ServiceCard card={card} />
                        </motion.div>
                    ))}
                </motion.div>
            }
        </section>
    );
};

export default ServicesSection;
