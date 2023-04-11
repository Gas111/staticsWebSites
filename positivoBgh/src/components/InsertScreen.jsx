import React from 'react'

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