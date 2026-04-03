import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingScreen from '../pages/LoadingScreen'
import PageLayout from '../pages/PageLayout'
import NotFoundPage from '../pages/NotFound'

// Lazy Loading Pages
const Home = lazy(() => import('../pages/Home'))
const GameBoard = lazy(() => import('../pages/GameBoard'))

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route
            path="/"
            element={
              <PageLayout>
                <Home />
              </PageLayout>
            }
          />
          <Route
            path="/game"
            element={
              <PageLayout>
                <GameBoard />
              </PageLayout>
            }
          />
          <Route
            path="/loading"
            element={
              <PageLayout>
                <LoadingScreen />
              </PageLayout>
            }
          />

          {/* Fallback route */}
          <Route
            path="*"
            element={
              <PageLayout>
                <NotFoundPage />
              </PageLayout>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
