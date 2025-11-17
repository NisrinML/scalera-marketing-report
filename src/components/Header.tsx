import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/logo.webp";
import Button from "./ui/Button";
import useIsTablet from "@/hooks/useTablet";


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const isTablet=useIsTablet()
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-header-bg backdrop-blur-md shadow-md'
                    : 'bg-header-bg/80 backdrop-blur-sm'
                }`}>
            <div className="max-w-7xl mx-auto px-4 lg:px-0">
                <div className="flex items-center justify-between h-16 md:h-20 ">
                    <NavLink to="/" aria-label="scalera-logo">
            <img
              src={logo}
              alt="scalera-logo"
              width={isTablet?120:160}
              loading="lazy"
              decoding="async"
            />
          </NavLink>
          <Button>
            ابدأ التقييم المجاني
          </Button>
                </div>
            </div>
            </header>
    )
}

export default Header