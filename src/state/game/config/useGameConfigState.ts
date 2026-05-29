import { useContext } from 'react'
import { GameConfigContext, type GameConfigContextValue } from './gameConfigContext'

// Access context with this safe hook
export function useGameConfigState(): GameConfigContextValue {
  const context = useContext<GameConfigContextValue | undefined>(GameConfigContext)

  // Check if exist/created
  if (!context) {
    throw new Error('useGameConfigState must be used within GameConfigProvider')
  }

  return context
}
