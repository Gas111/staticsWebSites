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

     <Routes>
     <Route path="/" element={<LoginScreen/>}></Route>

     <Route element={<ProtectedRoutes />}>
          <Route path="/search" element={<MainScreen />}></Route>
          <Route path="/changes" element={<FirstScreen />}></Route>
        </Route>

 </Routes>
    </div>
  )
}

export default App
