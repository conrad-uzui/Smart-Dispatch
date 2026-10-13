import { Link } from "react-router-dom";

const variants = {
  primary: "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg focus:ring-2 focus:ring-primary focus:ring-offset-2",
  secondary: "bg-surface-container-lowest dark:bg-surface text-primary border border-outline-variant hover:bg-surface-container-low focus:ring-2 focus:ring-primary focus:ring-offset-2",
  ghost: "bg-transparent text-primary hover:bg-primary/10",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#20ba59] shadow-md hover:shadow-lg",
};

const sizes = {
  sm: "px-4 py-2 rounded-lg text-sm font-semibold",
  md: "px-5 py-2.5 rounded-lg text-sm md:text-base font-semibold",
  lg: "px-8 py-3.5 rounded-xl text-base font-bold",
  xl: "px-9 py-4 rounded-xl text-base md:text-lg font-bold",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  to,
  href,
  children,
  ...props
}) {
  const baseClasses = `inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 active:scale-[0.98] ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
