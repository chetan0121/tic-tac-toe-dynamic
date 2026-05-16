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
  gameMenu: {
    path: '/gamemanu',
    Page: GameMenu,
  },
  gameConfigs: {
    path: '/gameconfig',
    Page: GameConfigs,
  },
  notFound: {
    path: '*',
    Page: NotFoundPage,
  },
}

export default AppRoutes
