import { Loader2Icon } from "lucide-react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

import { twMerge as cn } from "tailwind-merge";

interface Props<T extends FieldValues> {
  label: string;
  register: UseFormRegister<T>;
  name: keyof T;
  errorMessage?: string;
  isInvalid?: boolean;
  required?: boolean;
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "date"
    | "datetime-local"
    | "time"
    | "week"
    | "month"
    | "tel"
    | "url";
  disabled?: boolean;
  pattern?: RegExp;
}

function InputComponent<FormSchema extends FieldValues>({
  errorMessage,
  label,
  name,
  register,
  isInvalid = false,
  required = false,
  type = "text",
  disabled = false,
  pattern,
}: Props<FormSchema>) {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <span
        className={cn(
          " text-white/70 transition-all duration-300",
          isInvalid && "text-rose-500"
        )}
      >
        {label}
      </span>
      <input
        className={cn(
          "caret-white input-ghost input-md md:input-lg outline-none bg-white/20 text-white/70 placeholder:text-white/50   transition-all duration-300 disabled:opacity-30 rounded-lg ring-0",
          isInvalid && "input-error caret-rose-200 bg-red-500/30"
        )}
        placeholder={isInvalid ? "Enter correct credentials" : label}
        autoComplete="off"
        type={type}
        {...register(name as Path<FormSchema>, { required, pattern })}
        disabled={disabled}
      />
    </div>
  );
}

export default InputComponent;
