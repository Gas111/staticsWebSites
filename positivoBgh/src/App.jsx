import { useState } from 'react'
import './App.css'
import './index.css'
import NavBar from './components/NavBar'
import MainSection from './components/MainSection'
import Footer from './components/Footer'
import LoginScreen from './components/LoginScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LoginScreen />

      {/* <NavBar />
      <MainSection />
      <Footer /> */}
    </div>
  )
}

export default App
