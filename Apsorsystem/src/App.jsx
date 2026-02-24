import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router'
import Navigation from './Components/Layout/Navigation'
import Homepage from './Components/Pages/Public/Homepage'
import Footer from './Components/Pages/Public/Footer/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <div className="min-h-screen flex flex-col">

  {/* Navigation Bar */}
  <div className="w-full fixed top-0 left-0 z-30">
    <Navigation />
  </div>

  {/* Page Content */}
  <div className="pt-24"> {/* space for fixed navbar */}
    <div className="max-w-7xl mx-auto w-full px-4">
      <Homepage />   {/* your page content */}
    </div>
  </div>

</div>
   <div className=" ">
    <Footer />
  </div>



   
      
      
    </BrowserRouter>
    </>
  )
}

export default App
