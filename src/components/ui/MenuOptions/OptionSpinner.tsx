import { useEffect, useMemo, useState } from 'react'
import type { RangeOptions } from '../../../hooks/useGameSetupOptions'
import { Minus, Plus } from 'lucide-react'

const hasText = (value?: string) => Boolean(value && value.trim().length > 0)

type inputType = number | 'Infinite'

const clampValue = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value))

const parseInt = (value: string): number | null => {
  const trimmed = value.trim()
  if (!trimmed) return null

  const parsed = Number(trimmed)
  if (Number.isNaN(parsed)) return null

  const rounded = Math.round(parsed)
  if (!Number.isSafeInteger(rounded)) return null

  return rounded
}

function OptionSpinner({ range, text }: RangeOptions) {
  const { min, max, value, step, setValue } = range
  const safeStep = useMemo(() => (step > 0 ? step : 1), [step])
  const [inputValue, setInputValue] = useState<inputType>(value !== null ? value : 'Infinite')

  // Handle states
  useEffect(() => {
    if (inputValue === 'Infinite') {
      setValue(null)
    } else {
      setValue(Number(inputValue))
    }
  }, [inputValue, setValue])

  const decrement = () => {
    if (inputValue === 'Infinite') {
      setInputValue(max)
    } else {
      let finalVal = inputValue - step
      finalVal = clampValue(finalVal, min, max)
      setInputValue(finalVal)
    }
  }

  const increment = () => {
    if (inputValue === max) {
      setInputValue('Infinite')
      return
    }

    if (inputValue !== 'Infinite') {
      let finalVal = inputValue + step
      finalVal = clampValue(finalVal, min, max)
      setInputValue(finalVal)
    }
  }

  const handleChange = (nextValue: string) => {
    const numVal = parseInt(nextValue)

    if (numVal === null) {
      setInputValue('Infinite')
    } else {
      let finalVal = Math.round(numVal / safeStep) * safeStep
      finalVal = clampValue(finalVal, min, max)
      setInputValue(finalVal)
    }
  }

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-black/20">
      {hasText(text.label) ? (
        <span className="block text-left font-['Montserrat'] text-sm font-medium tracking-[0.28em] text-white/55 uppercase">
          {text.label}
        </span>
      ) : null}
      {hasText(text.helper) ? (
        <p className="mt-2 text-left text-sm text-white/55">{text.helper}</p>
      ) : null}

      <div className="mt-4 flex items-center gap-2">
        <button
          type="button"
          onClick={decrement}
          disabled={value !== null && value <= min}
          aria-label="Decrease value"
          className="flex h-11 w-full flex-2 items-center justify-center rounded-l-2xl rounded-r-md border border-white/10 bg-white/5 text-lg font-semibold text-white/70 transition-all duration-200 hover:border-[hsl(38,95%,54%)]/50 hover:text-[hsl(38,95%,70%)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Minus/>
        </button>

        <div className="relative flex-3">
          <input
            type="text"
            value={inputValue}
            min={min}
            max={max}
            onChange={event => handleChange(event.target.value)}
            className="h-11 w-full rounded-md border border-[hsl(38,95%,54%)]/35 bg-linear-to-b from-[#FFE8B2]/34 to-[#FFC878]/22 px-4 text-center font-['Montserrat'] text-base text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[hsl(38,95%,54%)]/35 focus-visible:outline-none"
          />
        </div>

        <button
          type="button"
          onClick={increment}
          disabled={value === null || value > max}
          aria-label="Increase value"
          className="flex h-11 w-full flex-2 items-center justify-center rounded-l-md rounded-r-2xl border border-white/10 bg-white/5 text-lg font-semibold text-white/70 transition-all duration-200 hover:border-[hsl(38,95%,54%)]/50 hover:text-[hsl(38,95%,70%)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Plus/>
        </button>
      </div>
    </div>
  )
}

export default OptionSpinner
