import React from 'react'
import NavBar from './NavBar'
import MainSection from './MainSection'
import Footer from './Footer'

const InsertScreen = ({ userInfo, setUserInfo }) => {
  return (
    <div>
      <NavBar userInfo={userInfo} setUserInfo={setUserInfo} />
      <MainSection />
      <Footer />
    </div>
  )
}

export default InsertScreen
