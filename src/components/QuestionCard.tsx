
import { cn } from "@/lib/utils"
import Button from "./ui/Button"
import Icon from "./ui/icon/Icon"
import { motion } from "framer-motion"
export type QuestionType = "yesno" | "multi" | "likert"

export interface Question {
  id: number
  text: string
  type: QuestionType
  step: number
  options?: string[] | null
}

export interface Answer {
  question_id: number
  value: string | string[] | number
}

interface QuestionCardProps {
  question: Question
  answer: Answer | undefined
  onAnswer: (answer: Answer) => void
  currentIndex: number
  totalQuestions: number
}

const ratingLabels = ["ليس تماماً", "قليلاً", "لست متأكد", "نوعاً ما", "بالتأكيد"]
const ratingEmojis = ["Face1", "Face2", "Face3", "Face4", "Face5"]

export function QuestionCard({ question, answer, onAnswer, currentIndex, totalQuestions }: QuestionCardProps) {
  // Yes or No Button Section
  const renderYesNo = () => (
    <div className="flex gap-4 justify-center mt-8 w-full py-2">
      <Button
        variant={answer?.value === "Yes" ? "default" : "outline"}
        className={cn(
          "normal-background text-text w-32 h-8 py-0 md:w-64 md:h-12 border border-text no-shadow ",
          answer?.value === "Yes" ? "background-hover" : "",
        )}
        onClick={() =>
          onAnswer({
            question_id: question.id,
            value: "Yes",
          })
        }
      >
        نعم
      </Button>
      <Button
        variant={answer?.value === "No" ? "default" : "outline"}
        className={cn(
         "normal-background text-text  w-32 h-8 py-0 md:w-64 md:h-12  border border-text no-shadow ",
          answer?.value === "No" ? "background-hover" : "",
        )}
        onClick={() =>
          onAnswer({
            question_id: question.id,
            value: "No",
          })
        }
      >
        لا
      </Button>
    </div>
  )

  // Multi Button Section
  const renderCheckbox = () => (
    <div className="space-y-3 mt-8">
      {question.options?.map((option, idx) => (
        <label
          key={idx}
           className={cn(
    "flex items-start gap-2 w-full cursor-pointer p-2 rounded-md border transition-colors",
    "text-text hover:bg-hover hover:text-subtitle hover:border-subtitle",
    Array.isArray(answer?.value) && answer.value.includes(option)
      ? "bg-hover border-subtitle text-subtitle"
      : "border-text"
  )}
       >
           <input
            type="checkbox"
            checked={Array.isArray(answer?.value) ? answer.value.includes(option) : false}
            onChange={(e) => {
              const currentValues = Array.isArray(answer?.value) ? answer.value : []
              const newValues = e.target.checked
                ? [...currentValues, option]
                : currentValues.filter((v) => v !== option)
              onAnswer({
                question_id: question.id,
                value: newValues,
              })
            }}
            className=" peer
                        my-auto w-4 h-4 md:w-5 md:h-5 rounded-md border-2 border-text
                        checked:bg-subtitle checked:border-subtitle
                        cursor-pointer"
          />
          <span className="text  peer-checked:text-subtitle ">{option}</span>
        </label>
      ))}
    </div>
  )

  // Likert Button Section
  const renderRating = () => (
    <div className="flex gap-2 justify-center flex-wrap w-full md:w-[60%]">
      {ratingEmojis.map((emoji, idx) => (
        <button
          key={idx}
          onClick={() =>
            onAnswer({
              question_id: question.id,
              value: idx + 1,
            })
          }
          className={cn(
            "flex-1 flex flex-col items-center gap-2 p-2 rounded-md transition overflow-hidden hover:cursor-pointer",
            answer?.value === idx + 1
              ? "bg-hover border border-link"
              : "hover:bg-gray-100 border border-transparent",
          )}
        >
          <div className="w-[30px] h-[30px] md:w-16 md:h-16 flex items-center">
          <Icon name={ratingEmojis[idx]} cls="w-[100%] h-[100%] flex items-center justify-center"/>
          </div>
          <span className="text text-text text-center">{ratingLabels[idx]}</span>
        </button>
      ))}
    </div>
  )

  const renderQuestion = () => {
    switch (question.type) {
      case "yesno":
        return renderYesNo()
      case "multi":
        return renderCheckbox()
      case "likert":
        return renderRating()
      default:
        return null
    }
  }

  return (
    <div className="w-full px-4 py-8 flex flex-col items-center justify-between gap-6 min-h-94 md:min-h-[60%] xl:min-h-fit ">
      <div className="flex flex-col items-center gap-4 text-center overflow-hidden">
        <h2 className="subtitle text-linear">
          السؤال <motion.span  key={`title-${currentIndex}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
    >{currentIndex + 1}</motion.span> من {totalQuestions}
        </h2>
        <motion.h1   key={`text-${currentIndex}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
        className="text-text question w-full md:w-[80%] lg:w-full max-w-5xl">{question.text}</motion.h1>
      </div>

      {renderQuestion()}
    </div>
  )
}