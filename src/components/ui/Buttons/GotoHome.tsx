import { Link } from 'react-router-dom'
import Routes from '../../../router/Routes'

function GotoHome() {
  return (
    <div>
      <Link to={Routes.home} className={'m-0 h-auto w-auto p-0'}>
        <button className="text-md transition-color rounded-xl border-[3px] border-blue-400 bg-transparent px-5 py-2 font-bold text-blue-400 duration-300 ease-in-out hover:border-blue-300 hover:bg-blue-600 hover:text-blue-200 active:scale-95 active:bg-blue-800">
          Go to Home
        </button>
      </Link>
    </div>
  )
}

export default GotoHome
