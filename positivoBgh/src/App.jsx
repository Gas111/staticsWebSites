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
  const [userInfo, setUserInfo] = useState('')
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <LoginScreen userInfo={userInfo} setUserInfo={setUserInfo} />
          }
        ></Route>

        <Route element={<ProtectedRoutes />}>
          <Route
            path="/search"
            element={
              <MainScreen userInfo={userInfo} setUserInfo={setUserInfo} />
            }
          ></Route>
          <Route
            path="/ingreso"
            element={
              <InsertScreen userInfo={userInfo} setUserInfo={setUserInfo} />
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
