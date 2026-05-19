import { lazy } from 'react'

// Lazy load pages
const Home = lazy(() => import('../pages/Main/Home'))
const GameBoard = lazy(() => import('../pages/Game/GameBoard'))
const LoadingScreen = lazy(() => import('../pages/Main/LoadingScreen'))
const NotFoundPage = lazy(() => import('../pages/Main/NotFound'))
const GameMenu = lazy(() => import('../pages/Game/GameMenu'))
const GameConfigs = lazy(() => import('../pages/Game/GameConfigs'))

// Mapping routes
const AppRoutes = {
  home: {
    path: '/',
    page: Home,
  },
  gameBoard: {
    path: '/board',
    page: GameBoard,
  },
  loading: {
    path: '/loading',
    page: LoadingScreen,
  },
  gameMenu: {
    path: '/gamemanu',
    page: GameMenu,
  },
  gameConfigs: {
    path: '/gameconfig',
    page: GameConfigs,
  },
  notFound: {
    path: '*',
    page: NotFoundPage,
  },
}

export default AppRoutes
