import { useState } from 'react'
import './App.css'
import './index.css'
import LoginScreen from './components/LoginScreen'
import { Route, Routes } from 'react-router'
import ProtectedRoutes from './components/ProtectedRoutes'
import MainScreen from './components/MainScreen'
import InsertScreen from './components/InsertScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainScreen />}></Route>

        {/* <Route element={<ProtectedRoutes />}> */}
        <Route path="/search" element={<MainScreen />}></Route>
        <Route path="/ingreso" element={<InsertScreen />}></Route>
        {/* </Route> */}
      </Routes>
    </div>
  )
}

export default App
