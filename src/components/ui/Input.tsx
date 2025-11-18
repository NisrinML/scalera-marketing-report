import { cn } from "@/lib/utils";
import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input: React.FC<InputFieldProps> = ({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  required,
  disabled,
  className,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-2 items-start flex-1">
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      className={cn(
        "bg-white text-text placeholder:text-placeholder px-4 py-2 rounded-lg md:rounded-xl w-full border border-text description transition-colors",
        "focus:shadow-inner outline-none",
        error
          ? "border-red-500 bg-red-50 focus:outline-none focus:ring-1 focus:ring-red-400"
          : "focus:outline-none focus:ring-1 focus:ring-placeholder",
        disabled && "bg-placeholder cursor-not-allowed",
        className
      )}
      {...rest} // This allows any other valid input props (autoComplete, min, max, etc.)
    />
         {error && <p className="text-xs text-red-500">{error}</p>}
         </div>
  );
};

export default Input;