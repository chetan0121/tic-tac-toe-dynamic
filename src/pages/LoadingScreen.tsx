import { useEffect, useMemo, useState, type FC } from 'react'
import GoHomeBtn from '../components/ui/Buttons/GotoHome'

const LOADING_TIMEOUT_MS = 5000

const displayTxt: Record<number, string> = {
  0: 'Loading...',
  1: 'Taking more than usual...',
  2: 'Check your internet connection...',
}

const MAX_LOADING_COUNT = Math.max(...Object.keys(displayTxt).map(Number))

const LoadingScreen: FC = () => {
  const [count5Sec, setCount5Sec] = useState(0)

  const infoKey = useMemo(() => {
    const sortedKeys = Object.keys(displayTxt)
      .map(Number)
      .sort((a, b) => b - a)

    return sortedKeys.find(key => count5Sec >= key) ?? MAX_LOADING_COUNT
  }, [count5Sec])

  // Increment count every 5 seconds
  useEffect(() => {
    if (count5Sec >= MAX_LOADING_COUNT) return

    const timer = setTimeout(() => {
      setCount5Sec(prev => prev + 1)
    }, LOADING_TIMEOUT_MS)

    return () => clearTimeout(timer)
  }, [count5Sec])

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black/30">
      <div className="relative mt-25 flex w-[90vw] items-center justify-center">
        {/* Outer Ring */}
        <div className="h-24 w-24 animate-spin rounded-full border-4 border-transparent border-t-[hsl(38,95%,62%)] border-b-[hsl(28,90%,45%)]"></div>

        {/* Inner Ring (Reverse Spin) */}
        <div className="absolute h-16 w-16 animate-[spin_1.5s_linear_infinite_reverse] rounded-full border-4 border-transparent border-r-[hsl(48,90%,65%)] border-l-[hsl(18,85%,55%)] opacity-70"></div>

        {/* Center Glow */}
        <div className="absolute h-4 w-4 animate-pulse rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>

        {/* Text */}
        <span className="absolute -bottom-12 w-full animate-pulse text-center font-['Montserrat'] text-sm font-medium tracking-wide text-[hsl(38,95%,62%)]">
          {displayTxt[infoKey]}
        </span>
      </div>

      <div
        className={`mt-25 ${count5Sec >= MAX_LOADING_COUNT ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <GoHomeBtn />
      </div>
    </div>
  )
}

export default LoadingScreen
