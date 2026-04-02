"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export function CursorZoom() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const positionRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)

  const updateCursorPosition = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%)`
    }
  }, [])

  useEffect(() => {
    // Check if device supports hover (desktop)
    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!hasHover) return

    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY }
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      rafRef.current = requestAnimationFrame(updateCursorPosition)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = 
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.gradient-border-card') ||
        target.closest('.glow-box') ||
        target.closest('.skill-tag') ||
        target.closest('.nav-link') ||
        target.closest('.social-icon') ||
        target.closest('[data-cursor-target]')

      if (isInteractive) {
        setIsActive(true)
        // Apply subtle scale to the hovered element
        const element = (isInteractive as Element)
        if (element && !element.classList.contains('cursor-scaled')) {
          element.classList.add('cursor-scaled')
        }
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactiveElement = 
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.gradient-border-card') ||
        target.closest('.glow-box') ||
        target.closest('.skill-tag') ||
        target.closest('.nav-link') ||
        target.closest('.social-icon') ||
        target.closest('[data-cursor-target]')

      if (interactiveElement) {
        interactiveElement.classList.remove('cursor-scaled')
      }
      
      const relatedTarget = e.relatedTarget as HTMLElement | null
      if (!relatedTarget || !relatedTarget.closest) {
        setIsActive(false)
        return
      }

      const isStillOnInteractive = 
        relatedTarget.closest('button') ||
        relatedTarget.closest('a') ||
        relatedTarget.closest('.gradient-border-card') ||
        relatedTarget.closest('.glow-box') ||
        relatedTarget.closest('.skill-tag') ||
        relatedTarget.closest('.nav-link') ||
        relatedTarget.closest('.social-icon') ||
        relatedTarget.closest('[data-cursor-target]')

      if (!isStillOnInteractive) {
        setIsActive(false)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.addEventListener('mouseout', handleMouseOut, { passive: true })
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)
    document.documentElement.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [updateCursorPosition])

  if (!isVisible) return null

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] will-change-transform"
      style={{
        width: isActive ? '48px' : '12px',
        height: isActive ? '48px' : '12px',
        transition: 'width 0.2s ease-out, height 0.2s ease-out, opacity 0.2s ease-out, box-shadow 0.2s ease-out',
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* Outer ring - transparent center */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: isActive 
            ? '2px solid oklch(0.7 0.15 180 / 0.6)' 
            : '2px solid oklch(0.95 0 0 / 0.5)',
          boxShadow: isActive
            ? '0 0 12px oklch(0.7 0.15 180 / 0.3), 0 0 24px oklch(0.65 0.2 280 / 0.15)'
            : '0 0 6px oklch(0.95 0 0 / 0.2)',
          transition: 'border 0.2s ease-out, box-shadow 0.2s ease-out',
        }}
      />
      
      {/* Rotating gradient ring - only visible when active */}
      {isActive && (
        <div 
          className="absolute rounded-full"
          style={{
            inset: '-3px',
            background: 'conic-gradient(from 0deg, oklch(0.7 0.15 180), oklch(0.75 0.18 200), oklch(0.65 0.2 280), oklch(0.7 0.18 320), oklch(0.7 0.15 180))',
            mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 3px))',
            WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 3px))',
            animation: 'cursor-spin 1.5s linear infinite',
          }}
        />
      )}

      {/* Center dot */}
      <div
        className="absolute rounded-full bg-primary/80"
        style={{
          width: isActive ? '4px' : '4px',
          height: isActive ? '4px' : '4px',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: isActive ? 0 : 1,
          transition: 'opacity 0.2s ease-out',
        }}
      />
    </div>
  )
}
