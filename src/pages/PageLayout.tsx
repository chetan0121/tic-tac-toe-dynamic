import type { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-linear-20 from-[hsl(220,85%,30%)] via-[hsl(230,75%,30%)] to-[hsl(320,65%,30%)]">
      {children}
    </div>
  )
}

export default PageLayout
