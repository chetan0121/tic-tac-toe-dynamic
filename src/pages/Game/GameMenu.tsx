import { useNavigate } from 'react-router-dom'
import NextButton from '../../components/ui/Buttons/NextButton'
import ConfigHeader from '../../components/game/configs/ConfigHeader'
import GameSetupPanel from '../../components/game/configs/GameSetupPanel'
import AppRoutes from '../../router/AppRoutes'

const TEXT = {
  title: 'Game Setup',
  buttons: {
    startGame: 'Start Game',
  },
}

function GameMenu() {
  const nav = useNavigate()
  const startGame = () => {
    void nav(AppRoutes.gameBoard.path)
  }

  return (
    <div className="flex w-full max-w-6xl flex-col gap-10 py-10">
      <ConfigHeader title={TEXT.title} />

      <GameSetupPanel maxWidth="100%" />

      <div className="self-start">
        <NextButton text={TEXT.buttons.startGame} onClick={startGame} />
      </div>
    </div>
  )
}

export default GameMenu
