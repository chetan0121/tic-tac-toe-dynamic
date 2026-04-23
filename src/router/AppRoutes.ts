import { lazy } from 'react'

// Lazy load pages
const Home = lazy(() => import('../pages/Home'))
const GameBoard = lazy(() => import('../pages/GameBoard'))
const LoadingScreen = lazy(() => import('../pages/LoadingScreen'))
const NotFoundPage = lazy(() => import('../pages/NotFound'))

// Mapping routes
const AppRoutes = {
  home: {
    path: '/',
    Page: Home,
  },
  game: {
    path: '/game',
    Page: GameBoard,
  },
  loading: {
    path: '/loading',
    Page: LoadingScreen,
  },
  notfound: {
    path: '*',
    Page: NotFoundPage,
  },
}

export default AppRoutes
