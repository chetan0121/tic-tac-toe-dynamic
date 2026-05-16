interface LoadingAnimProps {
  count: number
  messages?: Record<number, string>
}

const DEFAULT_LOADING_MESSAGES: Record<number, string> = {
  0: 'Loading...',
}

function LoadingAnim({ count, messages = DEFAULT_LOADING_MESSAGES }: LoadingAnimProps) {
  const entries = Object.entries(messages)
    .map(([key, value]) => [Number(key), value] as const)
    .sort((left, right) => right[0] - left[0])

  const message = entries.find(([key]) => count >= key)?.[1] ?? DEFAULT_LOADING_MESSAGES[0]

  return (
    <div className="flex w-[90vw] flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="h-24 w-24 animate-spin rounded-full border-4 border-transparent border-t-[hsl(38,95%,62%)] border-b-[hsl(28,90%,45%)]"></div>

        <div className="absolute h-16 w-16 animate-[spin_1.5s_linear_infinite_reverse] rounded-full border-4 border-transparent border-r-[hsl(48,90%,65%)] border-l-[hsl(18,85%,55%)] opacity-70"></div>

        <div className="absolute h-4 w-4 animate-pulse rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
      </div>

      <span className="mt-6 animate-pulse text-center font-['Montserrat'] text-sm font-medium tracking-wide text-[hsl(38,95%,62%)]">
        {message}
      </span>
    </div>
  )
}

export default LoadingAnim
