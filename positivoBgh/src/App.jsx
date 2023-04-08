import { useState } from 'react'
import './App.css'
import './index.css'
import NavBar from './components/NavBar'
import MainSection from './components/MainSection'
import Footer from './components/Footer'
import LoginScreen from './components/LoginScreen'
import { Route, Routes } from 'react-router'
import ProtectedRoutes from './components/ProtectedRoutes'
import MainScreen from './components/MainScreen'

function App() {
  const [count, setCount] = useState(0)
  const [userInfo, setUserInfo] = useState('')
  return (
    <div className="App">

     <Routes>
     <Route path="/" element={<LoginScreen userInfo={userInfo} setUserInfo={setUserInfo}/>}></Route>

     <Route element={<ProtectedRoutes />}>
          <Route path="/search" element={<MainScreen userInfo={userInfo} setUserInfo={setUserInfo}/>}></Route>
          {/* <Route path="/changes" element={<FirstScreen />}></Route> */}
        </Route>

 </Routes>
    </div>
  )
}

export default App
