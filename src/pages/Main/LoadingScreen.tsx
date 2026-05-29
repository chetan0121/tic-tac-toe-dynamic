import { useState, type FC } from 'react'
import GoHomeBtn from '../../components/ui/Buttons/GotoHome.tsx'
import LoadingAnim, { type LoadingMessage } from '../../components/ui/LoadingAnim.tsx'

const loadingMessages: LoadingMessage[] = [
  { txt: 'Loading...', keepTime: 5 },
  { txt: 'Taking more than usual...', keepTime: 5 },
  { txt: 'Check your internet connection...', keepTime: 0 },
]

const LoadingScreen: FC = () => {
  const [showHomeBtn, setShowHomeBtn] = useState(false)

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-14">
      <LoadingAnim messages={loadingMessages} onLastMessage={() => setShowHomeBtn(true)} />
      <div
        className={`transition-opacity duration-300 ${showHomeBtn ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <GoHomeBtn />
      </div>
    </div>
  )
}

export default LoadingScreen
