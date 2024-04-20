import './App.css'
import AI from './Components/AI'
import Card from './Components/Card'
import Content from './Components/Content'
import Download from './Components/Download'
import Footer from './Components/Footer'
import Logo from './Components/Logo'
import Merge from './Components/Merge'
import Navbar from './Components/Navbar'
import Plays from './Components/Play'
import Qr from './Components/QR'
import Youtube from './Components/Youtube'



function App() {
  return (
    <>
    <div className='w-full min-h-screen'>
    <div className='bg-[#F0F1F5]'>
      <div className='w-full flex items-center justify-center mx-auto'>
     <Navbar/>
      </div>
      <div className="w-full flex flex-col items-center justify-center rounded-lg relative">
        <Logo classname='h-[253px] w-[253px] ' />
        <Plays/>
        <AI/>
        <Merge/>
        <Qr/>
      </div>
    </div> 
    <div className="w-full flex flex-col items-center justify-center mb-12 mt-12">
      <Card/>
    </div>
    <Content/>
    <Youtube/>
    <div className="w-full flex flex-col items-center justify-center mb-12 mt-12">
      <Download/>
    </div>
    <div className="w-full flex flex-col items-center justify-center mb-4 mt-4">
      <Footer/>
    </div>
   </div>
  </>
  )
}

export default App
