import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import logo from "../assets/logo.webp";
import Button from "./ui/Button";
import useIsTablet from "@/hooks/useTablet";


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const isTablet=useIsTablet()
    const navigate=useNavigate()
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    const handlenavigate=(e: React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    navigate('/user-information'); 
    }
    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-header-bg/80 backdrop-blur-md shadow-md '
                    : 'bg-header-bg backdrop-blur-sm  '
                }`}>
            <div className="max-w-[1440px] mx-auto px-4 2xl:px-0">
                <div className="flex items-center justify-between h-16 md:h-20 ">
                    <NavLink to="" aria-label="scalera-logo">
            <img
              src={logo}
              alt="scalera-logo"
              width={isTablet?80:120}
              loading="lazy"
              decoding="async"
              aria-label="scalera logo"
            />
          </NavLink>
          <Button onClick={(e)=>{handlenavigate(e)}}>
            ابدأ التقييم المجاني
          </Button>
                </div>
            </div>
            </header>
    )
}

export default Header