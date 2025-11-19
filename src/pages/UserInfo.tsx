import { NavLink, useNavigate } from "react-router-dom"
import logo from "../assets/logo.webp";
import useIsTablet from "@/hooks/useTablet";
import Button from "@/components/ui/Button";
import { useState } from "react";
import type { UserInformation } from "@/types/UserInformation";
import type { ValidationError } from "@/types/ValidationError";
import { validatePage1 } from "@/lib/validation";
import Input from "@/components/ui/Input";

const UserInfo = () => {
  const isTablet = useIsTablet()
  const [formData, setFormData] = useState<UserInformation>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState<ValidationError>({});
  const navigate=useNavigate()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validatePage1(formData);

    if (Object.keys(validationErrors).length === 0) {
      console.log(formData)
      e.preventDefault()
      navigate('/company-information')
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
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
          <h1 className="title text-linear ">لنرسل لك تقريرك الآن!</h1>
          <div className="flex flex-col gap-2 self-start md:gap-4 items-start w-full">
            <h2 className="subtitle text-subtitle">  1- ماهو اسمك؟*</h2>
            <div className="flex flex-row items-start justify-center gap-4 md:gap-8 w-full lg:w-[80%]">
              <Input
                name="first_name"
                placeholder="الاسم"
                value={formData.first_name}
                onChange={handleChange}
                error={errors.first_name}
                required
              />
              <Input
                name="last_name"
                placeholder="الكنية"
                value={formData.last_name}
                onChange={handleChange}
                error={errors.last_name}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 self-start md:gap-4 items-start w-full">
            <h2 className="subtitle text-subtitle"> 2- ما هو بريدك الإلكتروني الذي نرسل إليه التقرير؟*</h2>
            <div className="flex flex-row items-start justify-center gap-8 w-full lg:w-[38.5%]">
              <Input
                name="email"
                type="email"
                placeholder="البريد الاكتروني"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 self-start md:gap-4 items-start w-full">
            <h2 className="subtitle text-subtitle"> 3- ما هو أفضل رقم يمكننا التواصل معك من خلاله؟</h2>
            <div className="flex flex-row items-start justify-center gap-8 w-full lg:w-[38.5%]">
              <Input
                name="phone"
                type="tel"
                placeholder="(+963) *** **** ***"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />
            </div>
          </div>
          <Button type="submit" className="self-end px-8 md:px-10">التالي</Button>
        </form>
      </div>
    </main>
  )
}

export default UserInfo