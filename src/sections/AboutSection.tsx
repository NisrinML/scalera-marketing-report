import AboutImage from "@/assets/About.webp"
import useIsTablet from "@/hooks/useTablet"
import { motion } from "framer-motion"
const AboutSection = () => {

  const isTablet = useIsTablet(920)
  const aboutList = [
    "أين تكمن نقاط الضعف في تسويقك ولماذا لا تحصل على النتائج المتوقعة", 
    "ما الذي يمنع العملاء من التفاعل والشراء رغم جهودك", 
    "ما هي الخطوات العملية التي ستساعدك على تحقيق نمو حقيقي ومستمر"]
 
  return (
    <section className={`relative mx-auto px-8 py-2 md:py-4 2xl:px-0 flex flex-col md:flex-row gap-4 items-center ${isTablet ? `bg-header-bg` : `bg-transparent`}`}>
      <div className='flex flex-col items-start justify-center text-right gap-2 lg:gap-4 flex-2'>
        <h1 className='title text-linear self-center text-center md:text-right md:self-start'>
          هل تشعر بأن النتائج لا تناسب الجهد المبذول؟
        </h1>
        <div className='text-text text'>
         لست وحدك!<br/>
         كثير من الشركات تعمل بجد… لكنها تعمل دون خطة واضحة تقودها للنتائج التي تستحقها.
تقرير سكاليرا يمنحك خطة تسويق مخصّصة لعملك، وقابلة للتطبيق من اليوم الأول. من خلال التقرير المقدم لك ستعرف بالضبط:
          <ul className="list-disc list-inside ">
            {aboutList.map((item, index) => {
              return (
                <li key={index} className="overflow-hidden">
                  {item}
                </li>
              )
            })}
          </ul>
          كل ذلك باستخدام إطار <span className="text-subtitle">Scalera Marketing Report</span> الذي أثبت فعاليته مع العديد من الشركات.
             </div>
        <h4 className="text-subtitle subtitle text-center md:text-right">
          خطة واضحة، نتائج مؤكدة — ابدأ الآن واجعل تسويقك أخيرًا يحقق لك ما تستحقه.
        </h4>
      </div>
      {!isTablet &&
        <div className='flex items-end flex-[1.5] overflow-hidden'>
   <motion.img
  src={AboutImage}
  alt="about image"
  loading="lazy"
  decoding="async"
  width={isTablet ? 200 : 800}
  className="object-cover"
  aria-label="about image"
  initial={{ rotateX: 0, rotateY: 0, rotateZ: 0 }}
  animate={{
    rotateX: [0, 10, -10, 5, -5, 0],
    rotateY: [0, -10, 5, -5, 10, 0],
    rotateZ: [0, 3, -3, 2, -2, 0],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>    </div>}
    </section>
  )
}

export default AboutSection