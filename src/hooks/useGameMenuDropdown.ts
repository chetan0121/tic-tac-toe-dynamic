import { useEffect, useMemo } from 'react'
import { GAME_MODES, type GameMode } from '../state/game/gameConstants'
import { useGameState } from '../state/game/useGameState'

export function useGameMenuDropdown() {
  const {
    state: { isMenuOpen, selectedMode },
    actions: { toggleMenu, closeMenu, selectMode },
  } = useGameState()

  const selectedOption = useMemo(
    () => GAME_MODES.find(mode => mode.value === selectedMode) ?? GAME_MODES[0],
    [selectedMode]
  )

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeydown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeydown)
    }
  }, [isMenuOpen, closeMenu])

  return {
    gameModes: GAME_MODES,
    isOpen: isMenuOpen,
    selectedMode,
    selectedOption,
    toggleDropdown: toggleMenu,
    closeDropdown: closeMenu,
    selectMode: (value: GameMode) => selectMode(value),
  }
}
