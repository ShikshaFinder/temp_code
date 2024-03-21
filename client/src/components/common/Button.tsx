"use client";

import { cn } from "@/utils/cn";
import { Loader } from "lucide-react";

type Props = {
  label: string;
  variant?: "primary" | "secondary" | "error" | "warning" | "success";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  leftChild?: React.ReactNode | null;
  rightChild?: React.ReactNode | null;
};

const Button = ({
  label,
  variant = "primary",
  size = "small",
  onClick = undefined,
  disabled = false,
  type = "button",
  className = "",
  leftChild,
  rightChild,
}: Props) => {
  return (
    <button
      className={cn(
        "text-4xl rounded-md opacity-100 transition duration-200 flex items-center btn",
        className,
        {
          // variants
          "hover:bg-blue-600 bg-blue-500 text-white": variant === "primary",
          "hover:bg-orange-600 bg-orange-500 text-white":
            variant === "secondary",
          "hover:bg-red-600 bg-red-500 text-white": variant === "error",
          "hover:bg-yellow-600 bg-yellow-500 text-white": variant === "warning",
          "hover:bg-green-600 bg-green-500": variant === "success",
          // "btn-error": variant === "error",
          // "btn-warning": variant === "warning",
          // "btn-success": variant === "success",
          // size
          "py-2 px-6 text-lg": size === "small",
          "py-4 px-8 text-2xl": size === "medium",
          "py-6 px-10 text-3xl": size === "large",
          //   disabled
          disabled: disabled,
        }
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {disabled ? (
        <Loader className="animate-spin" />
      ) : (
        <>
          {leftChild}
          <p className="text-center">{label}</p>
          {rightChild}
        </>
      )}
    </button>
  );
};

export default Button;
