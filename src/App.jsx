import './App.css'
import AI from './Components/AI'
import Card from './Components/Card'
import Footer from './Components/Footer'
import Logo from './Components/Logo'
import Merge from './Components/Merge'
import Navbar from './Components/Navbar'
import Plays from './Components/Play'
import Qr from './Components/QR'



function App() {
  

  return (
    <>
    <div className='w-full min-h-screen'>
    <div className='bg-[#F0F1F5]'>
     <Navbar/>
     <div className="w-full flex flex-col items-center justify-center rounded-lg relative">
      <Logo/>
      <Plays/>
      <AI/>
      <Merge/>
      <Qr/>
    </div>
    </div> 
    <div className="w-full flex flex-col items-center justify-center mb-12 mt-12">
    <Card/>
    </div>
    <div className="w-full flex flex-col items-center justify-center mb-4 mt-4">
    <Footer/>
   </div>
   </div>
  </>
  )
}

export default App
