import { Play } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HEADING = 'Tic Tac Toe'
const HEADING2 = '2.0'
const DESCRIPTION =
  'The classic game reimagined. Experience strategic depth, and visually stunning gameplay.'
const START_BTN = 'START'

function Header() {
  const navigate = useNavigate()
  const toGamePage = () => {
    void navigate('/game')
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-10">
      {/* Head */}
      <div className="flex max-w-100 flex-col items-center justify-center gap-1">
        {/* Title */}
        <h1 className="font-['Oswald'] text-5xl font-semibold tracking-tight md:text-6xl">
          {HEADING} {HEADING2}
        </h1>

        {/* Description */}
        <p className="text-md mx-auto mt-10 text-center tracking-wide text-white/70 md:text-lg">
          {DESCRIPTION}
        </p>
      </div>

      {/* Start Button */}
      <div>
        <button
          onClick={toGamePage}
          className="group relative flex flex-row items-center gap-2 overflow-hidden rounded-xl border-2 bg-[#0080ff] px-8 py-3 tracking-wide shadow-[0_0_10px] shadow-[#0080ff] transition-transform duration-300 ease-out hover:scale-105 hover:border-blue-400 hover:shadow-[0_0_12px_auto] active:scale-95 active:bg-[hsl(210,100%,40%)]"
        >
          <span className="font-['Patrick_Hand'] text-lg md:text-xl">{START_BTN}</span>
          <Play
            size={16}
            fill="white"
            className="mt-0.5 transition-transform duration-300 ease-in-out group-hover:rotate-360"
          />
          <span className="pointer-events-none absolute inset-0 before:absolute before:inset-0 before:-translate-x-full before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.5),transparent)] before:transition-transform before:duration-700 group-hover:before:translate-x-full" />
        </button>
      </div>
    </div>
  )
}

export default Header
