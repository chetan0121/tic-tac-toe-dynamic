import { useContext } from 'react'
import { GameConfigContext, type GameConfigContextValue } from './gameConfigContext'

// Safe access to the game config context.
export function useGameConfigState(): GameConfigContextValue {
  const context = useContext<GameConfigContextValue | undefined>(GameConfigContext)
  if (!context) {
    throw new Error('useGameConfigState must be used within GameConfigProvider')
  }

  return context
}
