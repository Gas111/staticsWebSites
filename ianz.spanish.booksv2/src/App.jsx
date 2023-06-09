import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainSection from './components/MainSection'
import NavBar from './components/NavBar'
import SecondSection from './components/SecondSection'
import Footer from './components/Footer'
import FirstSection from './components/FirstSection'
import ThirdSection from './components/ThirdSection'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-screen w-100vw">
      <NavBar />
      <MainSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </div>
  )
}

export default App
