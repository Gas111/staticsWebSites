import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import LoginSection from './LoginSection'
import Footer from './Footer'
import LoadingAnimation from '../components/Sectiontools/LoadingAnimation'
import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { getDataLogin } from '../store/slices/login.slice'

const LoginScreen = () => {
  const navigate = useNavigate()
  //const [userInfo, setUserInfo] = useState([])
  // const [isDataOk, setIsDataOk] = useState(false)
  const dispatch = useDispatch()
  const loginData = useSelector((state) => state.login)

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')

    const getfunction = async (accessToken) => {
      await dispatch(getDataLogin(accessToken))
    }

    getfunction()

    if (loginData) {
      console.log(loginData)
      navigate('/search')
    }
    else{

      
    }
  }, [])

  return (
    <div>
      <div className="">
        <NavBar />
        <LoginSection />
        <Footer />
      </div>
    </div>
  )
}

export default LoginScreen
