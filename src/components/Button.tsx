import React from "react";

type ButtonVariant = "primary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
}

const Button = ({ children, variant = "primary", size = "md", onClick, disabled = false, className = "", ...props }: ButtonProps) => {
  const baseClasses: string =
    "inline-flex justify-center items-center font-semibold rounded-lg transition-colors duration-200  focus:outline-none  disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-green-500 shadow-green-500/50 hover:bg-green-600 text-slate-900 shadow-md",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const classes: string = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
