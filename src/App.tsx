import './App.css'
import Homepage from './assets/components/Homepage'
import Navbar from './assets/components/Navbar'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className='min-h-screen w-full bg-zinc-800'>
          <Homepage />
        </div>
      </div>
    </>
  )
}

export default App
