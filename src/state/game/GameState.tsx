import { useCallback, useMemo, useReducer, type ReactNode } from 'react'
import { GAME_MODES, type GameMode } from './gameConstants'
import { GameContext, type GameState } from './gameContext'

type GameAction =
  | { type: 'menu/open' }
  | { type: 'menu/close' }
  | { type: 'menu/toggle' }
  | { type: 'menu/select'; mode: GameMode }

const initialState: GameState = {
  isMenuOpen: false,
  selectedMode: GAME_MODES[0].value,
}

function reducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'menu/open':
      return { ...state, isMenuOpen: true }
    case 'menu/close':
      return { ...state, isMenuOpen: false }
    case 'menu/toggle':
      return { ...state, isMenuOpen: !state.isMenuOpen }
    case 'menu/select':
      return { ...state, selectedMode: action.mode, isMenuOpen: false }
    default:
      return state
  }
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openMenu = useCallback(() => {
    dispatch({ type: 'menu/open' })
  }, [])

  const closeMenu = useCallback(() => {
    dispatch({ type: 'menu/close' })
  }, [])

  const toggleMenu = useCallback(() => {
    dispatch({ type: 'menu/toggle' })
  }, [])

  const selectMode = useCallback((mode: GameMode) => {
    dispatch({ type: 'menu/select', mode })
  }, [])

  const value = useMemo(
    () => ({
      state,
      actions: { openMenu, closeMenu, toggleMenu, selectMode },
    }),
    [state, openMenu, closeMenu, toggleMenu, selectMode]
  )

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}
