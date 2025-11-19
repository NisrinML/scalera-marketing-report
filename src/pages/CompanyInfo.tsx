import { NavLink } from "react-router-dom"
import logo from "../assets/logo.webp";
import useIsTablet from "@/hooks/useTablet";

const CompanyInfo = () => {
    const isTablet = useIsTablet()
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        
      };
  return (
     <main className="flex grow w-full">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col  pb-8 md:pb-16 ">
        {/* Header section */}
        <div className="flex items-center h-16 md:h-32 bg-header-bg md:bg-transparent px-8 2xl:px-0  shadow-[0_2px_2px_#A5BFCB] md:shadow-none">
          <NavLink to="" aria-label="scalera-logo">
            <img
              src={logo}
              alt="scalera-logo"
              width={isTablet ? 80 : 140}
              loading="lazy"
              decoding="async"
              aria-label="scalera logo"
            />
          </NavLink>
        </div>
        {/* Container Section */}
                <form onSubmit={handleSubmit} className="flex flex-col items-center md:rounded-3xl md:bg-background gap-6 md:gap-8 p-4 md:p-8 mx-8 2xl:mx-0 ">
          <h1 className="title text-linear ">قبل أن تبدأ التقييم</h1>
        </form>
        </div>
        </main>
  )
}

export default CompanyInfo