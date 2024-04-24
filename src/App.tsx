import './App.css'
import Header from './assets/components/pages/Header'
import Navbar from './assets/components/Navbar'
import Main from './assets/components/pages/Main'

function App() {
  return (
    <>
      <div className=' bg-gradient-to-b from-zinc-800 to-yellow-400 min-w-full h-full min-h-screen'>
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
