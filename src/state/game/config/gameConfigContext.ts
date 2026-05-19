import { createContext } from 'react'
import type { GameMode, GameMoveLimit, GameTimeControl } from '../../constants/gameConstants'

// Selected options for a new match.
export interface GameConfigState {
  selectedMode: GameMode
  timeControl: GameTimeControl
  moveLimit: GameMoveLimit
}

export interface GameConfigContextValue {
  state: GameConfigState
  actions: {
    setSelectedMode: (mode: GameMode) => void
    setTimeControl: (value: GameTimeControl) => void
    setMoveLimit: (value: GameMoveLimit) => void
  }
}

// Context used by provider + hook.
export const GameConfigContext = createContext<GameConfigContextValue | undefined>(undefined)
