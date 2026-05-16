import AppRouter from './router/AppRouter'
import { GameProvider } from './state/game/GameState'

function App() {
  return (
    <GameProvider>
      <AppRouter />
    </GameProvider>
  )
}

export default App
