import type { FC } from 'react'
import GotoHome from '../components/ui/Buttons/GotoHome'

const NotFoundPage: FC = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-2 bg-black/30 p-10">
      <h1 className="text-center text-lg font-bold text-balance md:text-2xl">
        Oops! We can’t find this page
      </h1>
      <h2 className="text-md max-w-200 text-center text-balance md:text-xl">
        This page doesn’t exist. It looks like the link is broken or the page has been moved.
      </h2>
      <div className="mt-10">
        <GotoHome />
      </div>
    </div>
  )
}

export default NotFoundPage
