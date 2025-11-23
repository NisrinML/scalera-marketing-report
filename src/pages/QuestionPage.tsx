import useIsTablet from "@/hooks/useTablet";
import logo from "../assets/logo.webp";
import { NavLink, useNavigate } from "react-router-dom";
import { QuestionCard, type Answer, type Question } from "@/components/QuestionCard";
import { useContext, useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ProgressBar } from "@/components/BrogressBar";
import ReportModal from "@/components/ReportModal";
import Icon from "@/components/ui/icon/Icon";
interface QuestionnaireState {
  [key: number]: Answer
}
const QuestionPage = () => {
  const isTablet = useIsTablet()
  const companyId = 5 //localStorage.get("companyId")
  const [questions, setQuestions] = useState<Question[]>([
    {
      "id": 1,
      "text": "هل الرسالة التي توصلها عن منتجاتك أو خدماتك تساعد العملاء على فهم كيف يمكن لهذه المنتجات أو الخدمات مساعدتهم على البقاء والازدهار؟",
      "type": "likert",
      "step": 1,
      "options": null
    },
    {
      "id": 2,
      "text": "هل يستطيع عملاؤك تسمية المشكلة الرئيسية التي تحلها شركتك؟",
      "type": "likert",
      "step": 1,
      "options": null
    },
    {
      "id": 3,
      "text": "هل رسالتك واضحة وبسيطة؟",
      "type": "likert",
      "step": 1,
      "options": null
    },
    {
      "id": 4,
      "text": "عند كتابة نصوص التسويق، هل تبدأ بالحديث عن المشكلة التي يحلها منتجك أو خدمتك للعميل؟",
      "type": "yesno",
      "step": 1,
      "options": null
    },
    {
      "id": 5,
      "text": "هل لديك عرض تقديمي قصير وواضح يجذب الانتباه ويسهل فهمه؟",
      "type": "yesno",
      "step": 2,
      "options": null
    },
    {
      "id": 6,
      "text": "هل يعرف كل شخص في شركتك كيفية الإجابة بطريقة مقنعة عن سؤال: \"ماذا تفعلون؟\"",
      "type": "likert",
      "step": 2,
      "options": null
    },
    {
      "id": 7,
      "text": "صحيح أم خطأ: شعارنا يساعدنا على التميز عن المنافسين ويجعلنا لا ننسى",
      "type": "yesno",
      "step": 3,
      "options": null
    },
    {
      "id": 8,
      "text": "صحيح أم خطأ: لدينا دليل أسلوب لضمان تطبيق علامتنا التجارية بشكل متسق وموحد في التسويق",
      "type": "yesno",
      "step": 3,
      "options": null
    },
    {
      "id": 9,
      "text": "هل لديك دليل عمل (Playbook) يساعد فريقك على الالتزام برسالة العلامة التجارية لضمان استمرارية التناسق في التسويق؟",
      "type": "likert",
      "step": 3,
      "options": null
    },
    {
      "id": 10,
      "text": "صحيح أم خطأ: موقعي الإلكتروني يحقق لي العملاء المحتملين والمبيعات التي أرغب بها",
      "type": "yesno",
      "step": 4,
      "options": null
    },
    {
      "id": 11,
      "text": "هل يؤدي موقعك الإلكتروني بانتظام إلى تلقي الطلبات؟",
      "type": "likert",
      "step": 4,
      "options": null
    },
    {
      "id": 12,
      "text": "عد النظر إلى عنوان موقعك لثلاث ثوانٍ، هل يمكن للعميل المحتمل معرفة (1) ما تقدمه، (2) كيف يحسن حياته، و(3) ما عليه فعله لشراء المنتج أو الخدمة؟",
      "type": "likert",
      "step": 4,
      "options": null
    },
    {
      "id": 13,
      "text": "هل قمت بجمع وعرض شهادات العملاء على موقعك الإلكتروني؟",
      "type": "yesno",
      "step": 4,
      "options": null
    },
    {
      "id": 14,
      "text": "هل يشمل موقعك الإلكتروني العناصر التالية؟",
      "type": "multi",
      "step": 4,
      "options": [
        "بيان موجز يوضح ما تقدمه بوضوح",
        "صور تظهر كيف ستتحسن حياة العملاء باستخدامك",
        "تسليط الضوء على المشكلات التي تحلها منتجاتك أو خدماتك",
        "زر واضح ومباشر يدعو لاتخاذ الإجراء المطلوب",
        "خطة من 3 خطوات تسهّل رحلة العميل",
        "عرض مجاني يجذب البريد الإلكتروني للعملاء",
        "صور للعملاء وهم سعداء باستخدام المنتج أو الخدمة"
      ]
    },
    {
      "id": 15,
      "text": "هل تقدّم على موقعك ملف PDF أو محتوى قابل للتنزيل يجذب العملاء ويجمع عناوين البريد الإلكتروني؟",
      "type": "yesno",
      "step": 5,
      "options": null
    }])
  // it must be true at first
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<QuestionnaireState>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate()

  //Uploading Questions section
  // useEffect(() => {
  //   const fetchQuestions = async () => {
  //     try {
  //       const response = await fetch(`/api/questions?companyId=${companyId}`)
  //       if (response.ok) {
  //         const data = await response.json()
  //         setQuestions(data.questions)
  //       } else {
  //         console.error("Failed to fetch questions")
  //       }
  //     } catch (error) {
  //       console.error("Error fetching questions:", error)
  //     } finally {
  //       setIsLoadingQuestions(false)
  //     }
  //   }

  //   fetchQuestions()
  // }, [companyId])

  // Loading Section
  if (isLoadingQuestions || questions.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">جاري تحميل الأسئلة...</p>
        </div>
      </div>
    )
  }
  const currentQuestion = questions[currentQuestionIndex]
  const currentAnswer = answers[currentQuestionIndex]

  const isAnswered =
    currentAnswer !== undefined &&
    ((Array.isArray(currentAnswer.value) && currentAnswer.value.length > 0) ||
      (!Array.isArray(currentAnswer.value) && currentAnswer.value !== ""))

  const isLastQuestion = currentQuestionIndex === questions.length - 1

  const handleAnswer = (answer: Answer) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answer,
    }))
  }

  const handleNext = () => {
    if (!isAnswered) return

    if (isLastQuestion) {
       setShowSuccessModal(true);
      console.log(answers)
    } else {
      setCurrentQuestionIndex((prev) => prev + 1)
    }
  }

  const handlePrevious = () => {
    console.log(currentQuestionIndex,' ',length)
    if (currentQuestionIndex === 0) {
      // Go back to company information page
      navigate("/company-information")
    } 
    else {
      setAnswers((prev) => {
        const newAnswers = { ...prev }
        delete newAnswers[currentQuestionIndex]
        return newAnswers
      })
      setCurrentQuestionIndex((prev) => prev - 1)
    }
  }

  const downloadPdf = () => {
    // Example: download file from your API
    window.open("/api/download-report?companyId=" + companyId, "_blank");
  };

  const submitAnswers = async () => {
    setIsSubmitting(true)
    try {
      const answersToSubmit = Object.entries(answers).map(([index, answer]) => ({
        question_id: questions[Number.parseInt(index)].id,
        value: answer.value,
      }))

      const payload = {
        company_id: Number(companyId),
        answers: answersToSubmit,
      }

      console.log("Submitting questionnaire:", payload)

      const response = await fetch("/api/submit-questionnaire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        alert("تم الإرسال بنجاح")
      } else {
        alert("حدث خطأ أثناء إرسال الإجابات")
      }
    } catch (error) {
      console.error("Submission error:", error)
      alert("حدث خطأ أثناء إرسال الإجابات")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex grow w-full">
      <div className=" max-w-[1440px] mx-auto w-full flex flex-col  pb-8 md:pb-16 ">
        {/* Header section */}
        <div className="md:fixed flex items-center h-16 md:h-32 bg-header-bg md:bg-transparent px-8 2xl:px-0  shadow-[0_2px_2px_#A5BFCB] md:shadow-none">
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
        {/* Previous Button section */}
        <div className="mt-16 md:mt-32 flex items-center justify-center w-full py-2">
          <Button onClick={handlePrevious} className="normal-background text-text px-6 md:px-8 border border-text"
          >السابق</Button>
        </div>

        {/* Question Card section */}
        <QuestionCard
          question={currentQuestion}
          answer={currentAnswer}
          onAnswer={handleAnswer}
          currentIndex={currentQuestionIndex}
          totalQuestions={questions.length}
        />

        {/* Next Button  section */}
        <div className="flex items-center justify-center w-full py-2">
          <Button onClick={handleNext} className={cn(" px-8 md:px-10 ", !isAnswered ? "disabled " : "gradient-background")}
            disabled={!isAnswered || isSubmitting} >{isLastQuestion ? "إرسال" : "التالي"}</Button>
        </div>

        {/* Progress Bar section */}
        <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />

        {/* Report Modal section */}
        <ReportModal open={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
          <div className="felx flex-col justify-center w-full overflow-hidden">
              <div className="flex justify-center w-full mb-4" >
                <img
                  src={logo}
                  alt="scalera-logo"
                  width={isTablet ? 120 : 180}
                  loading="lazy"
                  decoding="async"
                  aria-label="scalera-logo"
                />
              </div>
            <p className="question text-text mb-6 text-center overflow-hidden">تهانينا، تقريرك أصبح جاهزاً الآن</p>

            <Button
              className="gradient-background px-8 py-2 w-full"
              onClick={() => downloadPdf()}
            >
              <div className="flex items-center justify-center gap-4 overflow-hidden">
             حمّل تقريرك الآن
             <Icon name="Download" cls="w-2 h-2 flex items-center overflow-hidden"/>
             </div>
            </Button>
          </div>
        </ReportModal>
      </div>
    </main>
  )
}

export default QuestionPage