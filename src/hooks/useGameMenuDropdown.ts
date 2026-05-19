import { GAME_MODES, type GameMode } from '../state/shared/gameConstants'
import { useGameConfigState } from '../state/game/config/useGameConfigState'

export function useGameMenuDropdown() {
  const {
    state: { selectedMode },
    actions: { setSelectedMode },
  } = useGameConfigState()

  return {
    gameModes: GAME_MODES,
    selectedMode,
    selectMode: (value: GameMode) => setSelectedMode(value),
  }
}
