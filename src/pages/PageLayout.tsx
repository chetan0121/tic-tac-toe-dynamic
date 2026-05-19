import { type ReactNode } from 'react'
import SettingsButton from '../components/ui/Settings/SettingsButton'
import FullscreenButton from '../components/ui/Buttons/FullscreenButton'

interface PageLayoutProps {
  children: ReactNode
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-linear-135 from-[hsl(18,36%,9%)] via-[hsl(34,34%,16%)] to-[hsl(48,28%,13%)]">
      <SettingsButton />
      <FullscreenButton />
      {children}
    </div>
  )
}

export default PageLayout
