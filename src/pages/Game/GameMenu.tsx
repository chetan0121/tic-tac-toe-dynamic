import { useNavigate } from 'react-router-dom'
import NextButton from '../../components/ui/Buttons/NextButton'
import ConfigCard from '../../components/game/configs/ConfigCard'
import ConfigDropdown from '../../components/game/configs/ConfigDropdown'
import { useGameMenuDropdown } from '../../hooks/useGameMenuDropdown'
import AppRoutes from '../../router/AppRoutes'

function GameMenu() {
  const TEXT = {
    header: {
      titlePrefix: 'Game',
      titleSuffix: 'Setup',
      heading: 'Choose Your Match',
      info: 'Pick a mode that fits the moment and jump straight into the board.',
    },
    dropdown: {
      label: 'Play With',
      modalTitle: 'Select Mode',
      listboxLabel: 'Play with',
    },
    buttons: {
      next: 'Next',
    },
  }

  // Dropdown state and handlers
  const { gameModes, selectedMode, selectMode } = useGameMenuDropdown()

  // Navigation
  const nav = useNavigate()
  const goToGameConfig = () => {
    void nav(AppRoutes.gameConfigs.path)
  }

  // ============ Render ============
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-10 px-4 py-10">
      {/* Main Card Container */}
      <ConfigCard>
        <div className="flex flex-col items-center gap-3 text-center">
          {/* Header Section */}
          <p className="font-['Montserrat'] text-xs tracking-[0.45em] text-white/45 uppercase">
            {TEXT.header.titlePrefix} {TEXT.header.titleSuffix}
          </p>
          <h1 className="font-['Oswald'] text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {TEXT.header.heading}
          </h1>
          <p className="max-w-sm font-['Montserrat'] text-sm leading-6 text-white/65 md:text-base">
            {TEXT.header.info}
          </p>

          {/* Mode Selection Field */}
          <div className="mt-6 w-full">
            <ConfigDropdown
              id="game-mode-button"
              label={TEXT.dropdown.label}
              options={gameModes}
              value={selectedMode}
              onChange={selectMode}
              modalTitle={TEXT.dropdown.modalTitle}
              listboxLabel={TEXT.dropdown.listboxLabel}
            />
          </div>
        </div>
      </ConfigCard>

      {/* Next Button */}
      <NextButton text={TEXT.buttons.next} onClick={goToGameConfig} />
    </div>
  )
}

export default GameMenu
