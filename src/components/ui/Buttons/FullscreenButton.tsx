import { Fullscreen, Minimize } from 'lucide-react'
import { useFullscreen } from '../../../hooks/useFullscreen'

const FullscreenButton = () => {
  const { isFullscreen, toggleFullscreen } = useFullscreen()

  return (
    <button
      type="button"
      onClick={() => {
        void toggleFullscreen()
      }}
      aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
      className="group fixed top-2.5 right-2.5 flex h-10 w-10 items-center justify-center rounded-lg border-none bg-transparent"
    >
      {isFullscreen ? (
        <Minimize className="h-[65%] w-[65%] transition-all duration-300 ease-out group-hover:scale-110 group-active:text-gray-400" />
      ) : (
        <Fullscreen className="h-[65%] w-[65%] transition-all duration-300 ease-out group-hover:scale-110 group-active:text-gray-400" />
      )}
    </button>
  )
}

export default FullscreenButton
