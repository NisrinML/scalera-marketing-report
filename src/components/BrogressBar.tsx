

interface ProgressBarProps {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100

  return (
    <>
    {/* Horizintal Progressbar */}
      <div className="fixed top-12 left-0 right-0 md:hidden px-4 z-50">
        <div className="flex items-center gap-2">
          {/* Progress circle and line - horizontal layout */}
          <div className="w-6 h-6 rounded-full bg-blue-600 border-2 border-blue-600 flex items-center justify-center flex-shrink-0" />
          <div className="flex-1 h-1 bg-gray-200 rounded-full relative overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-gray-300 flex-shrink-0" />
        </div>
      </div>

      <div className="hidden md:flex fixed right-24 top-[55%] transform -translate-y-1/2 flex-col items-center gap-0">
        {/* Vertical Progress Line */}
        <div className="w-2 h-96 bg-transparent rounded-xs border border-text relative overflow-hidden p-px">
          <div className="w-full bg-text transition-all duration-300 ease-out" style={{ height: `${progress}%` }} />
        </div>

        {/* Progress Circle */}
        <div className={`w-16 h-16 rounded-full  border border-text p-px -mt-px flex items-center justify-center
            ${progress==100?'bg-text':'bg-transparent'}
            `}>
          <span className={`text ${progress==100?'text-white':'text-text '}`}>{Math.round(progress)}%</span>
        </div>
      </div>
    </>
  )
}
