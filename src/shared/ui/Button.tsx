type ButtonProps = {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
  onClick?: () => void;
  color?: "primary" | "submit" | "error";
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  size,
  color = "primary",
  type = "button",
  className = "",
  disabled = false,
  onClick,
}: ButtonProps) {
  const sizeClasses = {
    small: "px-3 py-2 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const colorClasses = {
    primary: "bg-slate-500 text-white hover:bg-slate-400",
    submit: "bg-blue-200 text-slate-800 hover:bg-blue-300",
    error: "bg-red-500 text-white hover:bg-red-400",
  };

  const baseClasses =
    "rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <button
      disabled={disabled}
      type={type}
      className={`${baseClasses} ${sizeClasses[size]} ${colorClasses[color]} ${className} cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
