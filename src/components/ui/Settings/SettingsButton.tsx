import { Settings } from 'lucide-react'
import { useClickOutsideClose } from '../../../hooks/useClickOutsideClose'
import SettingsPanel from './SettingsPanel'

function SettingsButton() {
  const { ref, isOpen, toggle } = useClickOutsideClose()

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        className="group fixed top-2.5 left-2.5 z-40 flex h-10 w-10 items-center justify-center rounded-lg border-none bg-transparent"
        aria-label="Open settings"
      >
        <Settings
          className={`h-[65%] w-[65%] transition-all duration-500 ease-out group-hover:rotate-180 group-active:text-gray-400 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
        />
      </button>

      <SettingsPanel isOpen={isOpen} onClose={toggle} panelRef={ref} />
    </>
  )
}

export default SettingsButton
