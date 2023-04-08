import React, { useState } from 'react'
import NavBar from './NavBar'
import LoginSection from './LoginSection'
import Footer from './Footer'

const LoginScreen = () => {
  const [userInfo, setUserInfo] = useState('')

  return (
    <div className="">
      <NavBar userInfo={userInfo} setUserInfo={setUserInfo} />
      <LoginSection setUserInfo={setUserInfo} />
      <Footer />
    </div>
  )
}

export default LoginScreen
