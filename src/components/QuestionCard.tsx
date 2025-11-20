
import { cn } from "@/lib/utils"
import Button from "./ui/Button"

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

const ratingLabels = ["للأسف جداً", "للأسف", "محايد", "شيئاً", "بالتأكيد"]
const ratingEmojis = ["😢", "😟", "😐", "🙂", "😄"]
export function QuestionCard({ question, answer, onAnswer, currentIndex, totalQuestions }: QuestionCardProps) {
  const renderYesNo = () => (
    <div className="flex gap-4 justify-center mt-8">
      <Button
        variant={answer?.value === "Yes" ? "default" : "outline"}
        className={cn(
          "px-8 py-6 text-lg",
          answer?.value === "Yes" ? "bg-blue-500 hover:bg-blue-600 text-white" : "border-gray-300",
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
          "px-8 py-6 text-lg",
          answer?.value === "No" ? "bg-blue-500 hover:bg-blue-600 text-white" : "border-gray-300",
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

  const renderCheckbox = () => (
    <div className="space-y-3 mt-8">
      {question.options?.map((option, idx) => (
        <label
          key={idx}
          className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition"
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
            className="w-5 h-5 accent-blue-500"
          />
          <span className="text-right flex-1">{option}</span>
        </label>
      ))}
    </div>
  )

  const renderRating = () => (
    <div className="flex gap-4 justify-center mt-8 flex-wrap">
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
            "flex flex-col items-center gap-2 p-4 rounded-lg transition",
            answer?.value === idx + 1
              ? "bg-blue-100 border-2 border-blue-500"
              : "hover:bg-gray-100 border-2 border-transparent",
          )}
        >
          <span className="text-4xl">{emoji}</span>
          <span className="text-sm text-gray-600 text-center">{ratingLabels[idx]}</span>
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
    <div className="w-full px-4 py-8 flex flex-col items-center justify-center gap-6 min-h-[60%]">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="subtitle text-linear">
          السؤال {currentIndex + 1} من {totalQuestions}
        </h2>
        <h1 className="text-subtitle question w-[60%]">{question.text}</h1>
      </div>

      {renderQuestion()}
    </div>
  )
}