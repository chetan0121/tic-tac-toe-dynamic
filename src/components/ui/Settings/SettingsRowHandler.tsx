import type { LucideIcon } from 'lucide-react'
import { useFullscreenSetting } from './items/fullscreen/useFullscreenSetting'

interface SettingsRow {
  key: string
  label: string
  Icon: LucideIcon
  onClick: () => void
}

function SettingsRowHandler() {
  const fullscreenSetting = useFullscreenSetting()
  const rows: SettingsRow[] = [fullscreenSetting]

  return (
    <div className="flex flex-col gap-3 px-4 py-5">
      {rows.map(row => (
        <button
          key={row.key}
          type="button"
          onClick={row.onClick}
          className="group flex h-12 w-full items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 text-left font-['Montserrat'] text-sm font-medium text-white/80 transition-all duration-200 hover:border-[hsl(38,95%,54%)]/40 hover:bg-white/10 active:scale-[0.99]"
        >
          <span className="min-w-0 truncate">{row.label}</span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[hsl(38,95%,54%)]/25 bg-[hsl(38,95%,54%)]/10 text-[hsl(38,95%,70%)] transition-all duration-200 group-hover:border-[hsl(38,95%,54%)]/50 group-hover:bg-[hsl(38,95%,54%)]/15">
            <row.Icon size={17} strokeWidth={2.5} />
          </span>
        </button>
      ))}
    </div>
  )
}

export default SettingsRowHandler
