
import HeroImage from "@/assets/HeroImage.webp"
import useIsTablet from '@/hooks/useTablet'
import { motion } from "framer-motion"

const HeroSection = () => {

  const isTablet = useIsTablet()

  return (
    <section className="relative md:py-20 lg:py-0 lg:h-fit max-h-[800px] pt-20 lg:pt-28 lg:pb-10 overflow-hidden mx-auto px-8 2xl:px-0  flex flex-col md:flex-row gap-4 items-center">
      <div className='flex flex-col  items-center md:items-start justify-center text-center md:text-right gap-4 lg:gap-8 flex-2'>
        <h1 className='main-title text-linear'>
          حوّل تسويقك لنتائج تزيد مبيعات متجرك الإلكتروني.
        </h1>
        <p className='text-text text'>
      ربما حاولت طرقًا عديدة في التسويق… لكنك ما زلت تبحث عن خطة تشعر أنك تستطيع الاعتماد عليها.<br/>
       ابدأ الآن بـ تقييم سريع لمدة 10 دقائق فقط، لتحصل بعده على خطة تسويق مُخصّصة مجانًا توضح الخطوات العملية لزيادة مبيعاتك وتحقيق توسع حقيقي لمتجرك.       </p>
      </div>
      <div className='flex items-end flex-[1.5] overflow-hidden'>
    <motion.img
   src={HeroImage}
  alt="hero image"
  loading="lazy"
  decoding="async"
  width={isTablet ? 400 : 800}
  className="object-cover origin-bottom" 
  initial={{ 
    opacity: 0,
    y: isTablet?40:60,
    scaleY: 0.6,        // compressed vertically
  }}
  animate={{ 
    opacity: 1,
    y: isTablet?0:20,
    scaleY: 1,          // return to natural size
  }}
  transition={{ 
    duration: 0.8,
    ease: "easeOut"
  }}
/>
</div>
    </section>
  )
}

export default HeroSection