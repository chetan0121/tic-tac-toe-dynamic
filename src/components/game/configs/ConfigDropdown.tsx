import { useMemo } from 'react'
import { createPortal } from 'react-dom'
import { Check, ChevronDown } from 'lucide-react'
import { useClickOutsideClose } from '../../../hooks/useClickOutsideClose'
import type { GameConfigOption } from '../../../state/shared/gameConstants'

const TEXT = {
  modalTitle: 'Select Option',
  listboxFallback: 'Options',
}

const hasContent = (value?: string) => Boolean(value && value.trim().length > 0)

type OptionValue = string | number | null

interface ConfigDropdownProps<T extends OptionValue> {
  id: string
  label?: string
  helper?: string
  value: T
  options: readonly (Omit<GameConfigOption, 'value'> & { value: T })[]
  onChange: (value: T) => void
  modalTitle?: string
  listboxLabel?: string
}

function ConfigDropdown<T extends OptionValue>({
  id,
  label,
  helper,
  value,
  options,
  onChange,
  modalTitle,
  listboxLabel,
}: ConfigDropdownProps<T>) {
  const { isOpen, toggle, close, ref } = useClickOutsideClose()

  const selectedOption = useMemo(
    () => options.find(option => option.value === value) ?? options[0],
    [options, value]
  )

  if (!selectedOption) {
    return null
  }

  const handleSelect = (nextValue: T) => {
    onChange(nextValue)
    close()
  }

  const resolvedListboxLabel = listboxLabel ?? label ?? TEXT.listboxFallback
  const resolvedModalTitle = modalTitle ?? TEXT.modalTitle

  return (
    <div
      ref={ref}
      className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-black/20"
    >
      {label ? (
        <span className="block text-left font-['Montserrat'] text-sm font-medium tracking-[0.28em] text-white/55 uppercase">
          {label}
        </span>
      ) : null}
      {hasContent(helper) ? (
        <p className="mt-2 text-left text-sm text-white/55">{helper}</p>
      ) : null}

      <div className="relative mt-3">
        <button
          id={id}
          type="button"
          onClick={toggle}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-4 rounded-2xl border border-[hsl(38,95%,54%)]/35 bg-linear-to-b from-[#FFE8B2]/34 to-[#FFC878]/22 px-4 py-3.5 text-left font-['Montserrat'] text-base text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all duration-200 hover:border-[hsl(38,95%,54%)]/65 hover:from-[#FFD68A]/[0.28] hover:to-[#FFB05C]/16 hover:shadow-[0_12px_32px_hsl(38,95%,54%)/25] focus-visible:ring-2 focus-visible:ring-[hsl(38,95%,54%)]/35 focus-visible:outline-none"
        >
          <span className="flex min-w-0 flex-col">
            <span className="truncate font-medium text-white">{selectedOption.label}</span>
            {hasContent(selectedOption.description) ? (
              <span className="truncate text-sm text-white/55">
                {selectedOption.description}
              </span>
            ) : null}
          </span>
          <ChevronDown
            size={18}
            strokeWidth={2.5}
            className={`shrink-0 text-white/70 transition-transform duration-300 ${
              isOpen ? 'rotate-180 text-[hsl(38,95%,68%)]' : ''
            }`}
          />
        </button>

        {isOpen &&
          createPortal(
            <div
              className="fixed inset-0 z-50 bg-black/55 px-4 py-6 backdrop-blur-[2px]"
              onClick={close}
            >
              <div className="flex h-full items-center justify-center">
                <div
                  className="w-full max-w-md overflow-hidden rounded-2xl border border-white/12 bg-linear-to-b from-[#22160D]/98 to-[#0C0805]/98 shadow-[0_24px_70px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
                  onClick={event => event.stopPropagation()}
                >
                  <div className="px-4 py-4">
                    <div className="relative max-h-[calc(100vh-10rem)] overflow-y-auto px-1 py-1">
                      <p className="px-3 pb-2 text-xs tracking-[0.35em] text-white/40 uppercase">
                        {resolvedModalTitle}
                      </p>
                      <div
                        role="listbox"
                        aria-label={resolvedListboxLabel}
                        className="space-y-2"
                      >
                        {options.map(option => {
                          const isSelected = option.value === value

                          return (
                            <button
                              key={String(option.value)}
                              type="button"
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => handleSelect(option.value)}
                              className={`flex w-full items-center justify-between gap-4 rounded-xl border px-4 py-3 text-left transition-all duration-200 ${
                                isSelected
                                  ? 'border-[hsl(38,95%,60%)]/60 bg-linear-to-b from-[#FFD68A]/16 to-[#FFC36E]/8'
                                  : 'border-white/10 bg-white/5 hover:border-[hsl(38,95%,54%)]/40 hover:bg-white/10'
                              }`}
                            >
                              <span className="min-w-0">
                                <span className="block truncate font-['Montserrat'] text-base text-white">
                                  {option.label}
                                </span>
                                {hasContent(option.description) ? (
                                  <span className="block truncate text-sm text-white/52">
                                    {option.description}
                                  </span>
                                ) : null}
                              </span>

                              <span
                                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                                  isSelected
                                    ? 'border-[hsl(38,95%,65%)] bg-[hsl(38,95%,54%)]/20 text-[hsl(38,95%,68%)]'
                                    : 'border-white/10 bg-white/5 text-white/35'
                                }`}
                              >
                                {isSelected ? <Check size={14} strokeWidth={3} /> : null}
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
          )}
      </div>
    </div>
  )
}

export default ConfigDropdown
