import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "gradient-primary text-on-primary shadow-ambient hover:shadow-ambient-lg",
  secondary:
    "bg-secondary text-on-secondary shadow-ambient hover:bg-secondary-dim",
  tertiary:
    "bg-tertiary-container text-on-tertiary-container shadow-ambient hover:brightness-95",
  ghost: "bg-transparent text-primary hover:bg-surface-container-low",
};

export function Button({
  variant = "primary",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        py-4 px-6 rounded-full font-bold text-base
        transition-bounce hover:scale-105 active:scale-95
        ${variantStyles[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
