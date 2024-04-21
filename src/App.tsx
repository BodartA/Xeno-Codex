import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './assets/components/pages/Homepage'
// import Navbar from './assets/components/Navbar'
import Terminides from './assets/components/pages/Terminides'
import Automatons from './assets/components/pages/Automatons'
import LoginPage from './assets/components/pages/LoginPage'

function App() {
  return (
    <>
    <div className='bg-zinc-800 h-screen w-full' >
      <div className='bg-yellow-400 h-1/2 absolute w-full -skew-y-2 -mt-20'></div>
      <Homepage />
    </div>
    </>
      
  )
}

export default App
