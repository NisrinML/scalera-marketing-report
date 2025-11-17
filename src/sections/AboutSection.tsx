import AboutImage from "@/assets/About.webp"
import useIsTablet from "@/hooks/useTablet"

const AboutSection = () => {

  const isTablet = useIsTablet(920)
  const aboutList = ["أين نقاط الضعف في تسويقك بالضبط", "ما الذي يمنع العملاء من التفاعل معك والشراء", "والخطوات العملية التي يجب اتباعها لتحقيق نمو حقيقي"]
  return (
    <section className={`relative mx-auto px-8 py-2 md:py-4 lg:px-0 flex flex-col md:flex-row gap-4 items-center ${isTablet ? `bg-header-bg` : `bg-transparent`}`}>
      <div className='flex flex-col items-start justify-center text-right gap-4 lg:gap-8 flex-2'>
        <h1 className='main-title text-linear self-center md:self-start'>
          النتائج لا تناسب الجهد المبذول؟
        </h1>
        <p className='text-text text'>
          تقرير <span className="text-subtitle">Scalera Marketing Report</span> التسويقي يمنحك خطة تسويق جاهزة، مُخصصة لعملك، قابلة للتطبيق فورًا.<br />
          ستتعرف من خلاله على:
          <br />
          <ul className="list-disc list-inside ">
            {aboutList.map((item, index) => {
              return (
                <li key={index} >
                  {item}
                </li>
              )
            })}
          </ul>
          كل ذلك باستخدام إطار <span className="text-subtitle">Scalera Marketing Report</span> الذي أثبت نجاحه مع مئات الآلاف من الشركات حول العالم.
             </p>
        <h4 className="text-subtitle subtitle text-center md:text-right">
          ابدأ بخطة واضحة بدل المحاولة العشوائية — واجعل تسويقك أخيرًا يعمل لصالحك.
        </h4>
      </div>
      {!isTablet &&
        <div className='flex items-end flex-[1.5]'>
          <img src={AboutImage} alt="hero image" loading='lazy' decoding="async" className="object-cover " width={isTablet ? 200 : 800} />
        </div>}
    </section>
  )
}

export default AboutSection