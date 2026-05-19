import OptionDropdown from '../../ui/OptionDropdown'
import { useGameSetupOptions } from '../../../hooks/useGameSetupOptions'
import GameMenuGrid from './GameMenuGrid'

interface GameSetupPanelProps {
  maxWidth: string
}

function GameSetupPanel({ maxWidth }: GameSetupPanelProps) {
  const setupOptions = useGameSetupOptions()

  return (
    <GameMenuGrid maxWidth={maxWidth}>
      {setupOptions.map(option => (
        <OptionDropdown key={option.key} selection={option.selection} text={option.text} />
      ))}
    </GameMenuGrid>
  )
}

export default GameSetupPanel
