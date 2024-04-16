import './App.css'
import AI from './Components/AI'
import Footer from './Components/Footer'
import Logo from './Components/Logo'
import Merge from './Components/Merge'
import Navbar from './Components/Navbar'
import Plays from './Components/Play'


function App() {
  

  return (
    <>
    <div className='w-full min-h-screen bg-[#F0F1F5]'>
     <Navbar/>
    <div className="w-full flex flex-col items-center justify-center rounded-lg">
      <Logo/>
      <Plays/>
      <AI/>
      <Merge/>
    </div>
    </div>
    <div className="w-full flex flex-col items-center justify-center mb-4 mt-4">
    <Footer/>
   </div>
  </>
  )
}

export default App
