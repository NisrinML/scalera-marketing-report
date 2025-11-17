import { NavLink } from "react-router-dom"
import Button from "./ui/Button"
import Input from "./ui/Input"
import logo from "../assets/logo.webp";
import useIsTablet from "@/hooks/useTablet";
import Icon from "./ui/icon/Icon";
const Footer = () => {
  const isTablet = useIsTablet()
  return (
    <footer className=" bg-header-bg relative">
      <div className="max-w-7xl mx-auto py-8 flex flex-col gap-4">
        <div className="flex flex-col-reverse gap-4 md:flex-row md:justify-between">
          {/* connect section */}
          <div className="flex flex-col items-start gap-4 px-8 lg:px-0 md:gap-8 flex-1 overflow-hidden">
            <h4 className="text-subtitle subtitle -mb-2 lg:mb-0">تواصل معنا</h4>
            <Input type="text" placeholder="بريدك الالكتروني" />
            <Button className="description w-full lg:w-fit">اشتراك</Button>
          </div>
          {/* social links section */}
          <div className="flex flex-col items-center md:items-end justify-center  gap-8 md:pl-16 md:gap-16 flex-2">
            <div className="flex flex-col flex-3 items-center justify-center gap-2 md:gap-4">
              <NavLink to="/" aria-label="scalera-logo">
                <img
                  src={logo}
                  alt="scalera-logo"
                  width={isTablet ? 120 : 160}
                  loading="lazy"
                  decoding="async"
                  aria-label="scalera-logo"
                />
              </NavLink>
              <div className="flex flex-row gap-2">
                <NavLink to="" className="flex items-center justify-center rounded-full bg-text w-8 h-8 md:h-12 md:w-12  hover:scale-[1.02] m-1">
                  <Icon name="Instagram" cls="flex items-center justify-center w-3 h-3 md:w-6 md:h-6  hover:cursor-pointer" />
                </NavLink>
                <NavLink to="" className="flex items-center justify-center rounded-full bg-subtitle w-8 h-8 md:h-12 md:w-12  hover:scale-[1.02] m-1">
                  <Icon name="LinkedIn" cls="flex items-center justify-center w-3 h-3 md:w-6 md:h-6  hover:cursor-pointer" />
                </NavLink>
                <NavLink to="" className="flex items-center justify-center rounded-full bg-blue-background w-8 h-8 md:h-12 md:w-12  hover:scale-[1.02] m-1">
                  <Icon name="Gmail" cls="flex items-center justify-center w-3 h-3 md:w-6 md:h-6  hover:cursor-pointer" />
                </NavLink>
              </div>
            </div>

          </div>
        </div>
        {/* copy right section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center flex-1 mt-4 lg:mt-16 md:px-8 lg:px-0">
          <div className="flex flex-row justify-between gap-8 md:gap-16 text-text description">
            <h4>شروط الاستخدام</h4>
            <h4>سياسة الخصوصية</h4>
          </div>

          <h4 className="text-text description">
            Copyright © 2025 preserved for Scalera
          </h4>
        </div>
      </div>
    </footer>
  )
}

export default Footer