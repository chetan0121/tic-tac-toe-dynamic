import { ChevronDown, Check } from 'lucide-react'
import { createPortal } from 'react-dom'
import NextButton from '../../components/game/NextButton'
import { useGameMenuDropdown } from '../../hooks/useGameMenuDropdown'
import { useNavigate } from 'react-router-dom'
import AppRoutes from '../../router/AppRoutes'

function GameMenu() {
  const TITLE_PREFIX = 'Game'
  const TITLE_SUFFIX = 'Setup'
  const HEADING = 'Choose Your Match'
  const INFO = 'Pick a mode that fits the moment and jump straight into the board.'
  const FIELD_LABEL = 'Play With'
  const DROPDOWN_TITLE = 'Select Mode'
  const LISTBOX_LABEL = 'Play with'
  const BTN_TXT = 'Next'

  const { gameModes, isOpen, selectedOption, toggleDropdown, closeDropdown, selectMode } =
    useGameMenuDropdown()

  const nav = useNavigate()
  const goToGameConfig = () => {
    void nav(AppRoutes.gameConfigs.path)
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-10 px-4 py-10">
      <div className="w-full max-w-md rounded-4xl border border-white/10 bg-black/35 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-['Montserrat'] text-xs tracking-[0.45em] text-white/45 uppercase">
            {TITLE_PREFIX} {TITLE_SUFFIX}
          </p>
          <h1 className="font-['Oswald'] text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {HEADING}
          </h1>
          <p className="max-w-sm font-['Montserrat'] text-sm leading-6 text-white/65 md:text-base">
            {INFO}
          </p>

          <div className="mt-6 w-full rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-black/20">
            <label
              htmlFor="game-mode-button"
              className="mb-3 block text-left font-['Montserrat'] text-sm font-medium tracking-[0.28em] text-white/55 uppercase"
            >
              {FIELD_LABEL}
            </label>
            <div className="relative">
              <button
                id="game-mode-button"
                type="button"
                onClick={toggleDropdown}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 rounded-2xl border border-[hsl(38,95%,54%)]/35 bg-[linear-gradient(180deg,rgba(255,226,178,0.16),rgba(255,182,88,0.08))] px-4 py-3.5 text-left font-['Montserrat'] text-base text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all duration-200 hover:bg-[linear-gradient(180deg,rgba(255,236,198,0.22),rgba(255,196,122,0.12))] focus-visible:ring-2 focus-visible:ring-[hsl(38,95%,54%)]/35 focus-visible:outline-none"
              >
                <span className="flex min-w-0 flex-col">
                  <span className="truncate font-medium text-white">
                    {selectedOption.label}
                  </span>
                  <span className="truncate text-sm text-white/55">
                    {selectedOption.description}
                  </span>
                </span>
                <ChevronDown
                  size={18}
                  strokeWidth={2.5}
                  className={`shrink-0 text-white/70 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-[hsl(38,95%,68%)]' : ''
                  }`}
                />
              </button>

              {isOpen
                ? createPortal(
                    <div
                      className="fixed inset-0 z-50 bg-black/55 px-4 py-6 backdrop-blur-[2px]"
                      onClick={closeDropdown}
                    >
                      <div className="flex h-full items-center justify-center">
                        <div
                          className="w-full max-w-md overflow-hidden rounded-2xl border border-white/12 bg-[linear-gradient(180deg,rgba(34,22,13,0.98),rgba(12,8,5,0.98))] shadow-[0_24px_70px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
                          onClick={event => event.stopPropagation()}
                        >
                          <div className="px-4 py-4">
                            <div className="relative max-h-[calc(100vh-10rem)] overflow-y-auto px-1 py-1">
                              <p className="px-3 pb-2 text-xs tracking-[0.35em] text-white/40 uppercase">
                                {DROPDOWN_TITLE}
                              </p>
                              <div
                                role="listbox"
                                aria-label={LISTBOX_LABEL}
                                className="space-y-2"
                              >
                                {gameModes.map(mode => {
                                  const isSelected = mode.value === selectedOption.value

                                  return (
                                    <button
                                      key={mode.value}
                                      type="button"
                                      role="option"
                                      aria-selected={isSelected}
                                      onClick={() => selectMode(mode.value)}
                                      className={`flex w-full items-center justify-between gap-4 rounded-xl border px-4 py-3 text-left transition-all duration-200 ${
                                        isSelected
                                          ? 'border-[hsl(38,95%,60%)]/60 bg-[linear-gradient(180deg,rgba(255,214,138,0.16),rgba(255,195,110,0.08))]'
                                          : 'border-white/10 bg-white/5 hover:border-[hsl(38,95%,54%)]/40 hover:bg-white/8'
                                      }`}
                                    >
                                      <span className="min-w-0">
                                        <span className="block truncate font-['Montserrat'] text-base text-white">
                                          {mode.label}
                                        </span>
                                        <span className="block truncate text-sm text-white/52">
                                          {mode.description}
                                        </span>
                                      </span>

                                      <span
                                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                                          isSelected
                                            ? 'border-[hsl(38,95%,65%)] bg-[hsl(38,95%,54%)]/20 text-[hsl(38,95%,68%)]'
                                            : 'border-white/10 bg-white/5 text-white/35'
                                        }`}
                                      >
                                        {isSelected ? (
                                          <Check size={14} strokeWidth={3} />
                                        ) : null}
                                      </span>
                                    </button>
                                  )
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>,
                    document.body
                  )
                : null}
            </div>
          </div>
        </div>
      </div>

      <div>
        <NextButton text={BTN_TXT} onClick={goToGameConfig} />
      </div>
    </div>
  )
}

export default GameMenu
