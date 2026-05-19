import { type ReactNode } from 'react'
import SettingsButton from '../components/ui/Settings/SettingsButton'
import Logo from '../components/ui/Logo'

interface PageLayoutProps {
  children: ReactNode
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen w-screen flex-col overflow-x-hidden bg-linear-135 from-[hsl(18,36%,9%)] via-[hsl(34,34%,16%)] to-[hsl(48,28%,13%)]">
      <div className="flex w-full items-center gap-3 px-6 pt-4 pb-3">
        <SettingsButton />
        <Logo />
      </div>
      <main className="flex w-full flex-1 items-center justify-center px-6 pb-10">
        {children}
      </main>
    </div>
  )
}

export default PageLayout
