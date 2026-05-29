import OptionDropdown from '../../ui/MenuOptions/OptionDropdown'
import OptionSpinner from '../../ui/MenuOptions/OptionSpinner'
import { useGameSetupOptions } from '../../../hooks/useGameSetupOptions'
import GameMenuGrid from './GameMenuGrid'

interface GameSetupPanelProps {
  maxWidth: string
}

function GameSetupPanel({ maxWidth }: GameSetupPanelProps) {
  const setupOptions = useGameSetupOptions()

  return (
    <GameMenuGrid maxWidth={maxWidth}>
      {setupOptions.map(option => {
        if ('selection' in option) {
          return <OptionDropdown {...option} key={option.key} />
        } else if ('range' in option) {
          return <OptionSpinner {...option} key={option.key} />
        }

        return null
      })}
    </GameMenuGrid>
  )
}

export default GameSetupPanel
