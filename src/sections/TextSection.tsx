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
      <p className='text-text text'>العديد من المتاجر الإلكترونية تستحق أن يراها العملاء… لكن رسالتها غير واضحة بما يكفي ليلاحظها أحد.
        <br/>  في سوق مزدحم وصاخب، من يعرف كيف يشرح قيمته بوضوح هو الوحيد الذي يتم اختياره.
        <br/>مع 
<span className="text-subtitle">{' '}إطار سكاليرا التسويقي القصصي</span> ستحصل على خطة تسويق فعّالة تُظهر قيمة عملك الحقيقية وتمنحك طريقًا واضحًا لزيادة المبيعات.
<br/> أجب عن التقييم لمدة 10 دقائق فقط، واستلم خطتك المخصّصة لتساعدك على تحويل تسويقك إلى نتائج مذهلة.</p>
            </motion.div>
     </section>
  )
}

export default TextSection