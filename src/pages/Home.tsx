import HeroSection from "@/sections/HeroSection"
import Background from '@/assets/Decore.webp'
import useIsTablet from "@/hooks/useTablet"
import AboutSection from "@/sections/AboutSection"
import ServicesSection from "@/sections/ServicesSection"
import { useRef } from "react";
import TextSection from "@/sections/TextSection"
import ResultsSection from "@/sections/ResultsSection"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
const Home = () => {
  const isTablet = useIsTablet()
  const aboutRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <Header />

      <main className="flex grow w-full">
        <div className="max-w-[1440px] mx-auto w-full">
          {/* Homepage Content */}

            {/* Decore image */}
            {/* <img src={Background} alt="backrgound-decore" loading='lazy' decoding="async" width={isTablet ? 300 : 600}
        className='absolute top-0 left-0 object-contain' aria-label="decore image"
      />
      {!isTablet && <div style={{ top: aboutRef.current?.offsetTop, }}
        className="absolute w-[200px] h-[200px] top-0 right-0 bg-background rounded-bl-full"></div>}
      {!isTablet && <div style={{ top: (aboutRef.current?.offsetTop || 0) + (aboutRef.current?.offsetHeight || 0) - 200, }}
        className="absolute w-[200px] h-[200px] bottom-0 left-0 bg-header-bg rounded-tr-full"></div>} */}

            <div id="Hero" >
              <HeroSection />
            </div>
            <div id="About">
              <AboutSection />
            </div>
            <div id="Services" className="relative py-4" ref={aboutRef}>
              <ServicesSection />
            </div>
            <div id="Results" >
              <ResultsSection />
            </div>
            <div id="Text">
              <TextSection />
            </div>
          </div>

          </main>
          <Footer/>
          </>
          )
}

          export default Home