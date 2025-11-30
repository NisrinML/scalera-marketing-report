import { NavLink, useNavigate } from "react-router-dom"
import logo from "../assets/logo.webp";
import useIsTablet from "@/hooks/useTablet";
import { useRef, useState } from "react";
import type { CompanyInformation } from "@/types/CompanyInformation";
import { validatePage2 } from "@/lib/validation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import type { ValidationError } from "@/types/validationError";

const CompanyInfo = () => {
  const isTablet = useIsTablet()
  const [formData, setFormData] = useState<CompanyInformation>({
    name: '',
    business_type: '',
    website: '',
    employees_from: 0,
    employees_to: 0,
    revenue_from: 0,
    revenue_to: 0,
  });
  const [errors, setErrors] = useState<ValidationError>({});
  const nameRef = useRef<HTMLDivElement>(null)
  const websiteRef = useRef<HTMLDivElement>(null)
  const employeeRef = useRef<HTMLDivElement>(null)
  const navigate=useNavigate()
  const businessTypes = [
    'التدريب / الاستشارات',
    'الإنشاءات',
    'المبيعات المباشرة',
    'التعليم',
    'الترفيه / الإعلام',
    'الخدمات المالية',
    'التسويق الحر',
    'الرعاية الصحية',
    'الخدمات القانونية',
    'التصنيع',
    'وكالة تسويق',
    'التسويق داخل شركة',
    'منظمة غير ربحية',
    'العقارات',
    'منظمة دينية غير ربحية',
    'التجزئة / المستهلك',
    'التكنولوجيا',
    'أخرى',
  ];
  const employeeRanges = [
    { label: 'فقط أنا', from: 1, to: 1 },
    { label: '1-3', from: 1, to: 3 },
    { label: '4-10', from: 4, to: 10 },
    { label: '11-25', from: 11, to: 25 },
    { label: '26-50', from: 26, to: 50 },
    { label: '51-100', from: 51, to: 100 },
    { label: '101-250', from: 101, to: 250 },
    { label: '251+', from: 251, to: 10000 },
  ];
  const revenueRanges = [
    { label: '$0 - $100k', from: 0, to: 100000 },
    { label: '$100k - $250k', from: 100000, to: 250000 },
    { label: '$250k - $500k', from: 250000, to: 500000 },
    { label: '$500k - $1mm', from: 500000, to: 1000000 },
    { label: '$1mm - $10mm', from: 1000000, to: 10000000 },
    { label: '$10mm - $25mm', from: 10000000, to: 25000000 },
    { label: '$25mm+', from: 25000000, to: 999999999 },
  ];
  const scaleraServices = [
    { id: 'general_message', label: 'مراجعة أو إنشاء الرسالة العامة لشركتي' },
    { id: 'specific_project', label: 'إنشاء مشروع محدد (موقع إلكتروني، أداة جذب عملاء، دورة تدريبية، فيديو، إلخ)' },
    { id: 'long_term_partner', label: 'العثور على شريك طويل المدى يمكنني الوثوق به لبناء علامتي' },
    { id: 'specialized_agency', label: 'العثور على وكالة متكاملة يمكنها تنفيذ جميع احتياجاتي التسويقية' },
    { id: 'no_help', label: 'لا أحتاج المساعدة، فقط أود معرفة مستوى أدائي' },
    { id: 'not_sure', label: 'لست متأكدًا، ولهذا أقوم بإجراء هذا التقييم' },
  ];

  const handleInputChange = (field: keyof CompanyInformation, value: string | number | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));

    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  };

  const handleEmployeeRangeSelect = (range: typeof employeeRanges[0]) => {
    setFormData(prev => ({
      ...prev,
      employees_from: range.from,
      employees_to: range.to,
    }));
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors['employees_from'];
      delete newErrors['employees_to'];
      return newErrors;
    });
  };

  const handleRevenueRangeSelect = (range: typeof revenueRanges[0]) => {
    setFormData(prev => ({
      ...prev,
      revenue_from: range.from,
      revenue_to: range.to,
    }));
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors['revenue_from'];
      delete newErrors['revenue_to'];
      return newErrors;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validatePage2(formData);

    if (Object.keys(validationErrors).length === 0) {
      console.log(formData)
      e.preventDefault()
      navigate('/questions')
      setFormData({
    name: '',
    business_type: '',
    website: '',
    employees_from: 0,
    employees_to: 0,
    revenue_from: 0,
    revenue_to: 0,
      })
    } else {
      setErrors(validationErrors);
      
      if (validationErrors.name && nameRef.current) {
        nameRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
      } else if (validationErrors.website && websiteRef.current) {
        websiteRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
      }  else if ((validationErrors.employees_from || validationErrors.employees_to) && employeeRef.current) {
        employeeRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }
  };

  const handlePreviuos =()=>{
    alert('هل أنت متأكد أنك تريد العودة الى الصفحة السابقة؟ (ستخسر المعلومات التي قمت بإدخالها) ')
    navigate('/user-information')
  }
  return (
    <main className="flex grow w-full">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col  pb-8 md:pb-16 ">
        {/* Header section */}
        <div className="flex items-center h-16 md:h-32 bg-header-bg md:bg-transparent px-8 2xl:px-0  shadow-[0_2px_2px_#A5BFCB] md:shadow-none">
          <NavLink to="/" aria-label="scalera-logo">
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
        <form onSubmit={handleSubmit} className="flex flex-col items-center md:rounded-3xl md:bg-background gap-6 md:gap-8 p-4 md:p-8 md:mx-8 2xl:mx-0 ">
          <h1 className="title text-linear ">قبل أن تبدأ التقييم</h1>
          <div className="flex flex-col items-start gap-4 md:gap-8 w-full">
            {/*Company Name Section */}
            <div  ref={nameRef}  className="flex flex-col gap-2 self-start md:gap-4 items-start w-full">
              <h2 className="subtitle text-subtitle">1- ماهو اسم الشركة؟*</h2>
              <div className="w-full md:w-[40%]">
                <Input
                  name="name"
                  placeholder="اسم الشركة"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  error={errors.name}
                  required
                />
              </div>
            </div>
            {/*Company Website Section */}
            <div ref={websiteRef} className="flex flex-col gap-2 self-start md:gap-4 items-start w-full">
              <h2 className="subtitle text-subtitle">2- ما هو عنوان موقع الشركة؟*</h2>
              <div className="w-full  md:w-[40%]">
                <Input
                  name="website"
                  placeholder="موقع الشركة"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  error={errors.website}
                  required
                />
              </div>
            </div>
            {/*Business Type Section */}
            <div className="flex flex-col gap-2 self-start md:gap-4 items-start w-full">
              <h2 className="subtitle text-subtitle">3- أي من الخيارات التالية يصف مجال عملك أو نشاطك التجاري بشكل أفضل؟</h2>
              {errors.business_type && (
                <p className="description text-red-500">{errors.business_type}</p>
              )}
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start lg:w-[75%]">
                {businessTypes.map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleInputChange('business_type', type)}
                    className={`w-[130px] h-[30px] rounded-md md:w-[180px] md:h-12 md:rounded-xl description transition-all whitespace-nowrap hover:cursor-pointer
                    hover:bg-white hover:text-subtitle hover:border-2 hover:border-subtitle 
                    ${formData.business_type === type
                        ? 'bg-white text-subtitle border-2 border-subtitle hover:border-subtitle'
                        : 'bg-subtitle text-white shadow-md'
                      }`}
                  >
                    {type}
                  </button>
                ))}

              </div>

            </div>
            {/*Revenue Range Section */}
            <div className="flex flex-col gap-2 self-start md:gap-4 items-start w-full">
              <h2 className="subtitle text-subtitle">4- ما هو حجم الإيرادات السنوية لشركتك؟</h2>
              {(errors.revenue_from || errors.revenue_to) && (
                <p className="description text-red-500">{errors.revenue_from || errors.revenue_to}</p>
              )}
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start lg:w-[75%]">
                {revenueRanges.map(range => (
                  <button
                    key={range.label}
                    type="button"
                    onClick={() => handleRevenueRangeSelect(range)}
                    className={`w-[130px] h-[30px] rounded-md md:w-[180px] md:h-12 md:rounded-xl description transition-all whitespace-nowrap hover:cursor-pointer
                    hover:bg-white hover:text-subtitle hover:border-2 hover:border-subtitle 
                     ${formData.revenue_from === range.from && formData.revenue_to === range.to
                        ? 'bg-white text-subtitle border-2 border-subtitle hover:border-subtitle'
                        : 'bg-subtitle text-white shadow-md'
                      }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>

            </div>
            {/* Employee Range Section */}
            <div ref={employeeRef} className="flex flex-col gap-2 self-start md:gap-4 items-start w-full">
              <h2 className="subtitle text-subtitle">5- كم عدد الموظفين لدى شركتك؟</h2>
              {(errors.employees_from || errors.employees_to) && (
                <p className="description text-red-500">{errors.employees_from || errors.employees_to}</p>
              )}
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start lg:w-[75%]">
                {employeeRanges.map(range => (
                  <button
                    key={range.label}
                    type="button"
                    onClick={() => handleEmployeeRangeSelect(range)}
                    className={`w-[130px] h-[30px] rounded-md md:w-[180px] md:h-12 md:rounded-xl description transition-all whitespace-nowrap hover:cursor-pointer
                    hover:bg-white hover:text-subtitle hover:border-2 hover:border-subtitle 
                    ${formData.employees_from === range.from && formData.employees_to === range.to
                        ? 'bg-white text-subtitle border-2 border-subtitle hover:border-subtitle'
                        : 'bg-subtitle text-white shadow-md'
                      }`}
                  >
                    {range.label}
                  </button>
                ))}

              </div>

            </div>
            {/*Services  Section */}
            <div className="flex flex-col gap-2 self-start md:gap-4 items-start w-full">
              <h2 className="subtitle text-subtitle lg:w-[70%]">6-قبل إجراء تقرير ScaleraMarketingReport التسويقي، أعلم أنني بحاجة إلى المساعدة في (اختر جميع ما ينطبق):</h2>
              <div className="flex flex-col items-start gap-2 md:gap-0 w-full">

                {scaleraServices.map(option => (
                  <label
                      key={option.id}
                      className="flex items-start gap-2 border border-text hover:bg-hover md:hover:bg-transparent text-text w-full md:w-fit hover:text-subtitle md:border-0 md:gap-4 cursor-pointer p-2 rounded-md hover:border-subtitle transition-colors"
                      >
                    <input
                      type="checkbox"
                      className=" peer
                        my-auto w-4 h-4 md:w-5 md:h-5 rounded-md border-2 border-text
                        checked:bg-subtitle checked:border-subtitle
                        cursor-pointer"
                    />
                    <span className="text  peer-checked:text-subtitle ">{option.label}</span>
                  </label>
                ))}

              </div>
            </div>

            {/* Text Section */}
            <p className="text text-text">
              بالنقر على "التالي" في الأسفل، فإنني أوافق على <span className="text-subtitle hover:cursor-pointer hover:text-blue-background">شروط الخدمة{' '}</span> 
              و{' '}<span className="text-subtitle hover:cursor-pointer hover:text-blue-background">سياسة الخصوصية</span> لـ ScaleraMarketingReport.
              <br />
              نحن ملتزمون بحماية خصوصيتك.
              <br />
              قد نرسل لك محتوى مجانيًا من وقت لآخر، بالإضافة إلى معلومات حول خدماتنا، ويمكنك إلغاء الاشتراك في أي وقت.
              <br />
              نحن لا نبيع بياناتك مطلقًا ولن نفعل ذلك أبدًا.
              <br /> معلوماتك في أمان معنا.
            </p>
            {/* Buttons Section */}
            <div className="flex flex-row w-full items-center justify-center md:justify-end gap-4 md:gap-8 py-2">
              <Button onClick={handlePreviuos} className="normal-background text-text px-6 md:px-8 border border-text"
              >السابق</Button>
              <Button type="submit" className=" px-8 md:px-10 ">التالي</Button>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default CompanyInfo