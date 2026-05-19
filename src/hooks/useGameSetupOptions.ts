import {
  GAME_MODES,
  GAME_MOVE_LIMITS,
  GAME_TIME_CONTROLS,
} from '../state/constants/gameConstants'
import { useGameConfigState } from '../state/game/config/useGameConfigState'

const GAME_SETUP_TEXT = {
  mode: {
    label: 'Play With',
    helper: 'Choose who you want to play against.',
    modalTitle: 'Select Mode',
    listboxLabel: 'Play with',
  },
  turnTimer: {
    label: 'Turn Timer',
    helper: 'Choose how much time each turn gets.',
    modalTitle: 'Select Timer',
    listboxLabel: 'Turn timer',
  },
  moveCap: {
    label: 'Move Cap',
    helper: 'Choose the total move limit before a draw.',
    modalTitle: 'Select Move Cap',
    listboxLabel: 'Move cap',
  },
}

export function useGameSetupOptions() {
  const {
    state: { selectedMode, timeControl, moveLimit },
    actions: { setSelectedMode, setTimeControl, setMoveLimit },
  } = useGameConfigState()

  return [
    {
      key: 'mode',
      text: GAME_SETUP_TEXT.mode,
      selection: {
        options: GAME_MODES,
        currentOption: selectedMode,
        selectOption: setSelectedMode,
      },
    },
    {
      key: 'turnTimer',
      text: GAME_SETUP_TEXT.turnTimer,
      selection: {
        options: GAME_TIME_CONTROLS,
        currentOption: timeControl,
        selectOption: setTimeControl,
      },
    },
    {
      key: 'moveCap',
      text: GAME_SETUP_TEXT.moveCap,
      selection: {
        options: GAME_MOVE_LIMITS,
        currentOption: moveLimit,
        selectOption: setMoveLimit,
      },
    },
  ] as const
}
