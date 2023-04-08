import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import LoginSection from './LoginSection'
import Footer from './Footer'

const LoginScreen = ({ userInfo, setUserInfo }) => {
  useEffect(() => {
    console.log(localStorage.getItem('token'), 'tokenlocal')
    console.log(sessionStorage.getItem('oauth2_tr'), 'tokensession')
  }, [])

  return (
    <div className="">
      <NavBar userInfo={userInfo} setUserInfo={setUserInfo} />
      <LoginSection setUserInfo={setUserInfo} />
      <Footer />
    </div>
  )
}

export default LoginScreen
