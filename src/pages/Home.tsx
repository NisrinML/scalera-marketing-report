import HeroSection from "@/sections/HeroSection"
import Background from '@/assets/Decore.webp'
import useIsTablet from "@/hooks/useTablet"
import AboutSection from "@/sections/AboutSection"
const Home = () => {
  const isTablet = useIsTablet()
  return (
    <div className="max-w-7xl py-8">
      {/* Decore image */}
      <img src={Background} alt="backrgound-decore" loading='lazy' decoding="async" width={isTablet ? 300 : 800}
        className='absolute top-0 left-0 object-contain'
      />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
    </div>
  )
}

export default Home