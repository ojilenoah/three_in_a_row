'use client'

import { useEffect, useState } from 'react'

interface WinningLineProps {
  start: number
  end: number
}

export default function WinningLine({ start, end }: WinningLineProps) {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const getCoordinates = (index: number) => {
    const col = index % 3
    const row = Math.floor(index / 3)
    return { x: col * 100 + 50, y: row * 100 + 50 }
  }

  const startCoord = getCoordinates(start)
  const endCoord = getCoordinates(end)

  const lineLength = Math.sqrt(
    Math.pow(endCoord.x - startCoord.x, 2) + Math.pow(endCoord.y - startCoord.y, 2)
  )

  return (
    <svg className="absolute inset-0 h-full w-full">
      <line
        x1={startCoord.x}
        y1={startCoord.y}
        x2={endCoord.x}
        y2={endCoord.y}
        stroke="rgb(107, 114, 128)" // gray-500
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={lineLength}
        strokeDashoffset={animate ? 0 : lineLength}
        className="transition-all duration-700 ease-out"
      />
    </svg>
  )
}
