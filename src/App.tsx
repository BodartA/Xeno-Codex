import './App.css'
import Header from './assets/components/pages/Header'
import Navbar from './assets/components/Navbar'
import Main from './assets/components/pages/Main'

function App() {
  return (
    <>

      <div className=' bg-zinc-800 min-w-full h-full min-h-screen relative'>
        <div className='bg-yellow-400 -skew-y-2 h-3/5 min-w-full absolute top-0 left-0 -mt-56'></div>
        <div className='relative'>
          <Header />
          <Navbar />
          <Main />
        </div>

      </div>
    </>
  )
}

export default App
