import type { ReactNode } from 'react'

interface GameMenuGridProps {
  children: ReactNode
  maxWidth: string
  className?: string
}

function GameMenuGrid({ children, maxWidth, className = '' }: GameMenuGridProps) {
  return (
    <div
      className={`grid w-full gap-4 ${className}`}
      style={{
        maxWidth,
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 18rem), 1fr))',
      }}
    >
      {children}
    </div>
  )
}

export default GameMenuGrid
