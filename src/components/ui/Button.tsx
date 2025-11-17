


import { cn } from "@/lib/utils"
interface ButtonProps extends React.ComponentProps<"button"> {
  onCtaClick?: () => void
}

function Button({ children, className, onCtaClick,...props }: ButtonProps) {
  return (
    <button
       onClick={onCtaClick}
      className={cn(
        "btn-shadow gradient-background transition-colors duration-300 text-white button-text px-8 py-2 md:px-16 md:py-2 rounded-[5px] md:rounded-[10px] hover:scale-[1.02]  hover:cursor-pointer hover:text-text",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button