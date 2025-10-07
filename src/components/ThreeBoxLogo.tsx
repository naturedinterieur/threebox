import { Leaf } from "lucide-react"

interface ThreeBoxLogoProps {
  variant?: "dark" | "light"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

const ThreeBoxLogo = ({ variant = "dark", size = "md", className = "" }: ThreeBoxLogoProps) => {
  const textColor = variant === "light" ? "text-white" : "text-black"
  const leafColor = variant === "light" ? "text-white" : "text-[#6B8E23]"

  const sizeClasses = {
    sm: "text-base",
    md: "text-2xl",
    lg: "text-4xl",
    xl: "text-5xl",
  }

  const leafSizes = {
    sm: 14,
    md: 20,
    lg: 32,
    xl: 40,
  }

  return (
    <span className={`inline-flex items-center font-bold lowercase ${sizeClasses[size]} ${className}`}>
      <span className={textColor} style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontWeight: 800 }}>
        threeb
      </span>
      <span className="relative inline-flex items-center justify-center" style={{ width: "1em", height: "1em" }}>
        <Leaf
          className={leafColor}
          size={leafSizes[size]}
          style={{ transform: "rotate(-15deg)" }}
          strokeWidth={2.5}
          fill="currentColor"
        />
      </span>
      <span className={textColor} style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontWeight: 800 }}>
        x
      </span>
    </span>
  )
}

export default ThreeBoxLogo
