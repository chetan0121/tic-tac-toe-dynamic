import { useContext } from 'react'
import { GameContext, type GameContextValue } from './gameContext'

export function useGameState(): GameContextValue {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error('useGameState must be used within GameProvider')
  }

  return context
}
