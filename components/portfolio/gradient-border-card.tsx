"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface GradientBorderCardProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
}

export function GradientBorderCard({ children, className, innerClassName }: GradientBorderCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "gradient-border-card relative p-[2px] rounded-xl transition-transform duration-300 ease-out",
        isHovered && "scale-[1.02]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Rotating gradient border - only visible on hover */}
      <div 
        className={cn(
          "absolute inset-0 rounded-xl transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: `conic-gradient(
            from var(--card-border-angle, 0deg),
            transparent 0%,
            transparent 70%,
            #14b8a6 75%,
            #06b6d4 80%,
            #8b5cf6 85%,
            #ec4899 88%,
            transparent 93%,
            transparent 100%
          )`,
          animation: isHovered ? "card-border-angle-spin 1.4s linear infinite" : "none",
        }}
      />
      
      {/* Glow effect behind the traveling line */}
      <div 
        className={cn(
          "absolute inset-0 rounded-xl blur-md transition-opacity duration-300",
          isHovered ? "opacity-60" : "opacity-0"
        )}
        style={{
          background: `conic-gradient(
            from var(--card-border-angle, 0deg),
            transparent 0%,
            transparent 70%,
            #14b8a6 75%,
            #06b6d4 80%,
            #8b5cf6 85%,
            #ec4899 88%,
            transparent 93%,
            transparent 100%
          )`,
          animation: isHovered ? "card-border-angle-spin 1.4s linear infinite" : "none",
        }}
      />

      {/* Inner content container - masks the center */}
      <div 
        className={cn(
          "relative z-10 rounded-[10px] h-full",
          innerClassName
        )}
        style={{
          background: 'hsl(240 10% 6%)',
        }}
      >
        {children}
      </div>
    </div>
  )
}
