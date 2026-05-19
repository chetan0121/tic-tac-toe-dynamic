import { useNavigate } from 'react-router-dom'
import NextButton from '../../components/ui/Buttons/NextButton'
import ConfigCard from '../../components/game/configs/ConfigCard'
import ConfigDropdown from '../../components/game/configs/ConfigDropdown'
import ConfigHeader from '../../components/game/configs/ConfigHeader'
import {
  GAME_MODES,
  GAME_TIME_CONTROLS,
  GAME_MOVE_LIMITS,
} from '../../state/shared/gameConstants'
import { useGameConfigState } from '../../state/game/config/useGameConfigState'
import AppRoutes from '../../router/AppRoutes'

const TEXT = {
  header: {
    eyebrow: 'Game Config',
    title: 'Match Settings',
    subtitle: 'Tune the pace and limits before the board loads.',
    modePrefix: 'Mode:',
  },
  timeControl: {
    label: 'Time Control',
    helper: 'Chess like timer, for instance game.',
  },
  moveLimit: {
    label: 'Max Move Count',
    helper: 'Limit the total number of moves before Draw.',
  },
  buttons: {
    startGame: 'Start Game',
  },
}

const IDS = {
  timeControl: 'time-control',
  moveLimit: 'move-limit',
}

function GameConfigs() {
  const {
    state: { selectedMode, timeControl, moveLimit },
    actions: { setTimeControl, setMoveLimit },
  } = useGameConfigState()

  const navigate = useNavigate()
  const startGame = () => {
    void navigate(AppRoutes.gameBoard.path)
  }

  const modeLabel = GAME_MODES.find(mode => mode.value === selectedMode)?.label
  const modeText = modeLabel ? `${TEXT.header.modePrefix} ${modeLabel}` : undefined

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-10 px-4 py-10">
      <ConfigCard>
        <ConfigHeader
          eyebrow={TEXT.header.eyebrow}
          title={TEXT.header.title}
          subtitle={TEXT.header.subtitle}
          modeLabel={modeText}
        />

        <div className="mt-6 w-full space-y-4">
          <ConfigDropdown
            id={IDS.timeControl}
            label={TEXT.timeControl.label}
            helper={TEXT.timeControl.helper}
            options={GAME_TIME_CONTROLS}
            value={timeControl}
            onChange={setTimeControl}
          />

          <ConfigDropdown
            id={IDS.moveLimit}
            label={TEXT.moveLimit.label}
            helper={TEXT.moveLimit.helper}
            options={GAME_MOVE_LIMITS}
            value={moveLimit}
            onChange={setMoveLimit}
          />
        </div>
      </ConfigCard>

      <NextButton text={TEXT.buttons.startGame} onClick={startGame} />
    </div>
  )
}

export default GameConfigs
