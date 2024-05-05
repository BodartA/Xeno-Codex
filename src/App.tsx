import './App.css'
import Header from './assets/components/pages/Header'
import Navbar from './assets/components/Navbar'
import Main from './assets/components/pages/Main'

function App() {
  return (
    <>
      <div className=' bg-zinc-800 min-w-full h-full min-h-screen -z-10'>
      <div className=' bg-yellow-400 -skew-y-2 h-3/5 min-w-full absolute top-0 left-0 -mt-56 z-0'></div>
        <div className='grid grid-cols-1 grid-row-3 gap-8'>
          <Header />
          <Navbar />
          <Main />
        </div>
      </div>
    </>
  )
}

export default App
