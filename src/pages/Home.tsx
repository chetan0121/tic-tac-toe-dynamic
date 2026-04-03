import Header from '../components/ui/Header'
import SettingBtn from '../components/ui/Settings'

function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
      <Header />
      <SettingBtn />
    </div>
  )
}

export default Home
