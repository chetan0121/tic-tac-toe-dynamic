import { useMemo, useState, type ReactNode } from 'react'
import {
  GAME_MODES,
  GAME_MOVE_LIMITS,
  GAME_TIME_CONTROLS,
  type GameMode,
  type GameMoveLimit,
  type GameTimeControl,
} from '../../shared/gameConstants'
import { GameConfigContext, type GameConfigState } from './gameConfigContext'

// Default config values.
const INITIAL_STATE: GameConfigState = {
  selectedMode: GAME_MODES[0].value,
  timeControl: GAME_TIME_CONTROLS[0].value,
  moveLimit: GAME_MOVE_LIMITS[0].value,
}

// Stores config state and exposes setters.
export function GameConfigProvider({ children }: { children: ReactNode }) {
  const [selectedMode, setSelectedMode] = useState<GameMode>(INITIAL_STATE.selectedMode)
  const [timeControl, setTimeControl] = useState<GameTimeControl>(INITIAL_STATE.timeControl)
  const [moveLimit, setMoveLimit] = useState<GameMoveLimit>(INITIAL_STATE.moveLimit)

  const value = useMemo(
    () => ({
      state: { selectedMode, timeControl, moveLimit },
      actions: { setSelectedMode, setTimeControl, setMoveLimit },
    }),
    [selectedMode, timeControl, moveLimit]
  )

  return <GameConfigContext.Provider value={value}>{children}</GameConfigContext.Provider>
}
