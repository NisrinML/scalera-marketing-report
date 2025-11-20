import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const TextSection = () => {
    const ref = useRef(null);
 const isInView = useInView(ref, { once: true, margin: "-100px 0px -100px 0px" });

  return (
        <section className=" mx-auto px-8 xl:px-0 flex items-center justify-center py-6 md:py-20 2xl:py-32">
            <motion.div  
            ref={ref}
        initial={{ clipPath: "inset(0% 50% 0% 50%)", opacity: 0 }}
        animate={
          isInView
            ? { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }
            : { opacity: 0 }
        }
        transition={{ duration: 0.9, ease: "easeOut" }}
            className=' flex flex-col gap-2 lg:gap-4 text-center px-10 py-6 lg:px-44 lg:py-12 border border-text rounded-tl-[50px] rounded-br-[50px] lg:rounded-tl-[100px] lg:rounded-br-[100px]'>
      <h1 className="title text-linear">النجاح استراتيجية لا صدفة</h1>
      <p className='text-text text'>معظم الشركات لا تلفت الانتباه، ليس لأن منتجاتها ضعيفة، بل لأن رسالتها التسويقية غير واضحة.
        <br/> في سوق مزدحم، من يعبّر عن قيمته بوضوح هو من يُسمع.
        <br/>
<span className="text-subtitle">Scalera Marketing Report</span> يساعدك على بناء خطة تسويقية فعّالة تقود إلى نمو وأرباح حقيقية.
<br/> خصّص 10 دقائق فقط للتقييم، واحصل على خطة مخصّصة تُحوّل جهودك التسويقية إلى استثمار يحقق نتائج.</p>
            </motion.div>
     </section>
  )
}

export default TextSection