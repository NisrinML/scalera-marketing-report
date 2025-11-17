import HeroSection from "@/sections/HeroSection"
import Background from '@/assets/Decore.webp'
import useIsTablet from "@/hooks/useTablet"
import AboutSection from "@/sections/AboutSection"
import ServicesSection from "@/sections/ServicesSection"
import { useRef } from "react";
import TextSection from "@/sections/TextSection"
import ResultsSection from "@/sections/ResultsSection"
const Home = () => {
  const isTablet = useIsTablet()
const aboutRef = useRef<HTMLDivElement | null>(null);
  return (
    
    <div className="max-w-7xl py-8">
      {/* Decore image */}
      <img src={Background} alt="backrgound-decore" loading='lazy' decoding="async" width={isTablet ? 300 : 800}
        className='absolute top-0 left-0 object-contain'
      />
      {!isTablet && <div style={{ top: aboutRef.current?.offsetTop, }}
        className="absolute w-[200px] h-[200px] top-0 right-0 bg-background rounded-bl-full"></div>}
      {!isTablet && <div style={{ top: (aboutRef.current?.offsetTop || 0) + (aboutRef.current?.offsetHeight || 0) - 200, }}
        className="absolute w-[200px] h-[200px] bottom-0 left-0 bg-header-bg rounded-tr-full"></div>}

      <div id="Hero" >
        <HeroSection />
      </div>
      <div id="About">
        <AboutSection />
      </div>
      <div id="Services" className="relative py-4" ref={aboutRef}>
        <ServicesSection />
      </div>
      <div id="Results" className="w-full">
        <ResultsSection />
      </div>
            <div id="Text">
        <TextSection />
      </div>
    </div>
  )
}

export default Home