import { Settings, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

function SettingBtn() {
  const panelRef = useRef<HTMLDivElement | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggle_setting = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  // Handle Escape and Outside clicks to close setting panel
  useEffect(() => {
    function handleClickOutside(event: PointerEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false)
    }

    if (isOpen) {
      document.addEventListener('pointerdown', handleClickOutside)
      document.addEventListener('keydown', handleKey)
    }

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside)
      document.removeEventListener('keydown', handleKey)
    }
  }, [isOpen])

  return (
    <div>
      {/* Setting button */}
      <button
        onClick={toggle_setting}
        className="group fixed top-5 left-5 flex h-10 w-10 items-center justify-center rounded-lg border-none bg-transparent hover:bg-black/10 md:top-auto md:bottom-5"
      >
        <Settings className="h-[70%] w-[70%] transition-transform duration-300 ease-out group-hover:rotate-z-180 group-active:text-gray-400" />
      </button>

      {/* Window of Settings */}
      <div
        className={`fixed top-5 left-5 z-50 flex h-[90vh] w-200 max-w-[90vw] origin-top-left items-start justify-center rounded-2xl bg-black/60 p-0 backdrop-blur-sm transition-all duration-300 ease-out will-change-transform md:top-auto md:bottom-5 md:origin-bottom-left ${isOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-0 overflow-hidden opacity-0'} `}
        ref={panelRef}
      >
        {/* Close button */}
        <div className="flex w-full items-center justify-between border-b border-gray-400/80 px-5 py-2">
          <h2 className="text-lg font-semibold md:text-xl">Settings</h2>
          <button
            onClick={toggle_setting}
            className="group flex h-10 w-10 items-center justify-center rounded-lg border-2 bg-gray-600/60 hover:border-white/40 active:scale-95"
          >
            <X strokeWidth={3} className="group-hover:animate-[spinning_0.2s_ease-out]" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SettingBtn
