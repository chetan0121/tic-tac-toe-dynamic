import { useEffect, useState } from 'react'

export const useBreakpoint = (breakpoint: number = 768): boolean => {
  const [match, setMatch] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${breakpoint}px)`)
    const listener = () => setMatch(media.matches)

    listener()
    media.addEventListener('change', listener)

    return () => media.removeEventListener('change', listener)
  }, [breakpoint])

  return match
}
