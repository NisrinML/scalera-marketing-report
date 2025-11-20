

interface ProgressBarProps {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100

  return (
    <>
    {/* Horizintal Progressbar */}
      <div className="fixed top-24 left-0 right-0 md:hidden px-4 z-50">
        <div className="flex items-center">
          {/* Progress circle and line - horizontal layout */}
          <div className="flex-1 h-1.5 p-px bg-white rounded-xs border border-text relative overflow-hidden">
            <div
              className="h-full bg-text transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className={`w-6 h-6 rounded-full ${progress==100?'bg-text':'bg-white'} border border-text shrink-0`} />
        </div>
      </div>

      <div className="hidden md:flex fixed right-12 top-[50%] xl:right-24 xl:top-[55%] transform -translate-y-1/2 flex-col items-center gap-0 2xl:hidden">
        {/* Vertical Progress Line */}
        <div className="w-2 h-96 bg-transparent rounded-xs border border-text relative overflow-hidden p-px">
          <div className="w-full bg-text transition-all duration-300 ease-out" style={{ height: `${progress}%` }} />
        </div>

        {/* Progress Circle */}
        <div className={`w-16 h-16 rounded-full  border border-text p-px -mt-px flex items-center justify-center
            ${progress==100?'bg-text':'bg-transparent'}
            `}>
               <div className={`w-12 h-12 rounded-full  border border-text p-px -mt-px flex items-center justify-center
            ${progress==100?'bg-text':'bg-transparent'}
            `}>
          <span className={`text ${progress==100?'text-white':'text-text '}`}>{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </>
  )
}
