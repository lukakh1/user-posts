type ButtonProps = {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
  onClick: () => void;
  color?: "primary" | "submit" | "error";
  type?: "button" | "submit" | "reset";
  className?: string;
};

export default function Button({
  children,
  size,
  onClick,
  color = "primary",
  type = "button",
  className,
}: ButtonProps) {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const colorClasses = {
    primary: "bg-slate-500 text-white",
    submit: "bg-blue-200 text-slate-800",
    error: "bg-slate-200 text-red-500",
  };

  return (
    <button
      type={`${type}`}
      className={`rounded ${sizeClasses[size]} ${colorClasses[color]} ${className} cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
