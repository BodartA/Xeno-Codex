import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './assets/components/Homepage'
import Navbar from './assets/components/Navbar'
import Terminides from './assets/components/pages/Terminides'
import Automatons from './assets/components/pages/Automatons'
import LoginPage from './assets/components/pages/LoginPage'

function App() {
  return (
      <div className='bg-zinc-800 min-h-screen w-full'>
        <Navbar />
        <div>
          <Routes>
            <Route path='/home' element={<Homepage />}></Route>
            <Route path='/terminides' element={<Terminides />}></Route>
            <Route path='/automatons' element={<Automatons />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
          </Routes>
        </div>
      </div>
  )
}

export default App
