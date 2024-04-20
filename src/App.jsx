import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './Components/Home'
import Love from './Components/Love'
import Board from './Components/Board'



function App() {
  return (
    <>
   <div className='w-full min-h-screen'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/love" element={<Board/>}/>
    </Routes>
    </div>
  </>
  )
}

export default App
