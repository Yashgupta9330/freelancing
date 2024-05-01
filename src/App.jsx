import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Board from './pages/Board'
import Privacy from './Components/Privacy'
import Terms from './Components/Terms'



function App() {
  return (
    <>
   <div className='w-full min-h-screen'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Board" element={<Board/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
      <Route path='/terms' element={<Terms/>}/>
    </Routes>
    </div>
  </>
  )
}

export default App
