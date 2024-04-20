import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Board from './Components/Board'



function App() {
  return (
    <>
   <div className='w-full min-h-screen'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/board" element={<Board/>}/>
    </Routes>
    </div>
  </>
  )
}

export default App
