import { useEffect, useState, type FC } from 'react'
import GoHomeBtn from '../../components/ui/Buttons/GotoHome.tsx'
import LoadingAnim from '../../components/ui/LoadingAnim.tsx'

const LOADING_TIMEOUT_MS = 5000

const loadingMessages: Record<number, string> = {
  0: 'Loading...',
  1: 'Taking more than usual...',
  2: 'Check your internet connection...',
}

const MAX_LOADING_COUNT = Math.max(...Object.keys(loadingMessages).map(Number))

const LoadingScreen: FC = () => {
  const [count5Sec, setCount5Sec] = useState(0)

  // Increment count every 5 seconds
  useEffect(() => {
    if (count5Sec >= MAX_LOADING_COUNT) return

    const timer = setTimeout(() => {
      setCount5Sec(prev => prev + 1)
    }, LOADING_TIMEOUT_MS)

    return () => clearTimeout(timer)
  }, [count5Sec])

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-14 bg-black/30 px-4">
      <LoadingAnim count={count5Sec} messages={loadingMessages} />

      <div
        className={`transition-opacity duration-300 ${count5Sec >= MAX_LOADING_COUNT ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <GoHomeBtn />
      </div>
    </div>
  )
}

export default LoadingScreen
