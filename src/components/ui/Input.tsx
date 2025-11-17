import { cn } from "@/lib/utils";

const Input = ({ className, type = "text", ...props }: React.ComponentProps<"input">) => {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "bg-white text-text placeholder:text-placeholder px-4 py-2 rounded-lg md:rounded-xl w-full border border-text description",
        "focus:shadow-inner outline-none",
        className
      )}
      {...props}
    />
  );
};

export default Input;
