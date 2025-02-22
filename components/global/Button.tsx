import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  isLoading = false,
  children,
  className,
  ...props
}) => {
  const baseStyles = "rounded-[10px] focus:outline-none ";
  const variants = {
    primary: "bg-primary/90 text-white hover:bg-primary ",
    secondary: "text-primary hover:bg-gray-200 border border-primary",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };
  const sizes = {
    small: "px-3 py-1 text-sm",
    medium: "w-[180px] h-[57px] px-4 py-2 text-base",
    large: "w-[281px] h-[57px] px-4 py-3 text-base",
  };

  const loadingStyles = isLoading ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${loadingStyles} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
