import type { RefObject } from 'react'
import { X } from 'lucide-react'
import SettingsRowHandler from './SettingsRowHandler'

interface SettingsPanelProps {
  panelRef: RefObject<HTMLDivElement | null>
  isOpen: boolean
  onClose: () => void
}

function SettingsPanel({ panelRef, isOpen, onClose }: SettingsPanelProps) {
  return (
    <div
      className={`fixed top-0 left-0 z-50 flex h-full w-80 max-w-[85vw] flex-col border-r border-white/10 bg-linear-to-b from-[hsl(34,34%,16%)] via-[hsl(28,35%,12%)] to-[hsl(18,36%,9%)] shadow-2xl backdrop-blur-xl transition-transform duration-500 ease-in-out will-change-transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      ref={panelRef}
    >
      {/* Header */}
      <div className="flex w-full items-center justify-between border-b border-white/10 px-6 py-4">
        <h2 className="text-lg font-semibold md:text-xl">Settings</h2>
        <button
          type="button"
          onClick={onClose}
          className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 active:scale-95"
          aria-label="Close settings"
        >
          <X strokeWidth={3} className="group-hover:animate-[spinning_0.2s_ease-out]" />
        </button>
      </div>

      <SettingsRowHandler />
    </div>
  )
}

export default SettingsPanel
