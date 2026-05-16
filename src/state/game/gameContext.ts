import { createContext } from 'react'
import type { GameMode } from './gameConstants'

export interface GameState {
  isMenuOpen: boolean
  selectedMode: GameMode
}

export interface GameContextValue {
  state: GameState
  actions: {
    openMenu: () => void
    closeMenu: () => void
    toggleMenu: () => void
    selectMode: (mode: GameMode) => void
  }
}

export const GameContext = createContext<GameContextValue | undefined>(undefined)
