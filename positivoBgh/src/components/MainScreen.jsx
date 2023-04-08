import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import MainSection from './MainSection'

const MainScreen = ({ userInfo, setUserInfo }) => {
  return (
    <div>
      <NavBar userInfo={userInfo} setUserInfo={setUserInfo} />
      <MainSection />
      <Footer />
    </div>
  )
}

export default MainScreen
