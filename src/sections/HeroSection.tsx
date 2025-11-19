
import HeroImage from "@/assets/HeroImage.webp"
import useIsTablet from '@/hooks/useTablet'
import { motion } from "framer-motion"

const HeroSection = () => {

  const isTablet = useIsTablet()

  return (
    <section className="relative md:py-20 lg:py-0 lg:h-fit max-h-[800px] pt-20 lg:pt-28 lg:pb-10 overflow-hidden mx-auto px-8 2xl:px-0  flex flex-col md:flex-row gap-4 items-center">
      <div className='flex flex-col items-start justify-center text-center md:text-right gap-4 lg:gap-8 flex-2'>
        <h1 className='main-title text-linear'>
          احصل على خطة تسويق مخصصة لتنمية أعمالك
        </h1>
        <p className='text-text text'>
          أنت بحاجة إلى خطة تسويق تشعر بالثقة تجاهها.<br /> شارك في التقييم السريع لمدة 10 دقائق فقط، واحصل على خطة تسويق مُخصّصة مجانًا تساعدك على زيادة إيرادات عملك وتعزيز نموه.
        </p>
      </div>
      <div className='flex items-end flex-[1.5] overflow-hidden'>
    <motion.img
  src={HeroImage}
  alt="hero image"
  loading="lazy"
  decoding="async"
  width={isTablet ? 200 : 800}
  className="object-cover"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
/>
</div>
    </section>
  )
}

export default HeroSection