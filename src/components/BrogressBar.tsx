

interface ProgressBarProps {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4">
      {/* Vertical Progress Line */}
      <div className="w-1 h-64 bg-gray-300 rounded-full relative overflow-hidden">
        <div className="w-full bg-blue-500 transition-all duration-300 ease-out" style={{ height: `${progress}%` }} />
      </div>

      {/* Progress Circle */}
      <div className="w-8 h-8 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center">
        <span className="text-xs font-semibold text-blue-500">{Math.round(progress)}%</span>
      </div>
    </div>
  )
}
