import type { ReactNode } from 'react'

interface ConfigCardProps {
  children: ReactNode
}

function ConfigCard({ children }: ConfigCardProps) {
  return (
    <div className="w-full max-w-md rounded-4xl border border-white/10 bg-black/35 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-8">
      {children}
    </div>
  )
}

export default ConfigCard
