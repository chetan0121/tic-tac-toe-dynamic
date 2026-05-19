import { Suspense } from 'react'
import AppRoutes from './AppRoutes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingScreen from '../pages/Main/LoadingScreen'
import PageLayout from '../pages/PageLayout'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          {Object.entries(AppRoutes).map(([key, route]) => (
            <Route
              key={key}
              path={route.path}
              element={
                <PageLayout>
                  <route.page />
                </PageLayout>
              }
            />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
