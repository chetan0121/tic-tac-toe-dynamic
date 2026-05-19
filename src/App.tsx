import AppRouter from './router/AppRouter'
import { GameConfigProvider } from './state/game/config/GameConfigState'

function App() {
  return (
    <GameConfigProvider>
      <AppRouter />
    </GameConfigProvider>
  )
}

export default App
